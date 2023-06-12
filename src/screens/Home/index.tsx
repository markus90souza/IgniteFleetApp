import { useEffect, useState } from 'react'
import { Alert, FlatList } from 'react-native'
// STYLES
import { Box, Container, Label, Title } from './styles'
// COMPONENTS -> HOME
import { Header } from './components/Header'
import { CarStatus } from './components/CarStatus'
// NAVEGAÇÃO
import { useNavigation } from '@react-navigation/native'
// REALMDB
import { useQuery, useRealm } from '@libs/realm'
import { Historic } from '@libs/realm/schemas/historic'
import { HistoricCard, HistoricCardProps } from '@components/HistoricCard'
import dayjs from 'dayjs'
import { Realm, useUser } from '@realm/react'
import {
  getLastSyncTimestamp,
  saveLastSyncTimestamp,
} from '@libs/async-storage/sync-storage'

export function Home() {
  const [vehicleInUse, setVehicleInUse] = useState<Historic | null>(null)

  const [vehicleHistoric, setvehicleHistoric] = useState<HistoricCardProps[]>(
    [],
  )
  const { navigate } = useNavigation()

  const realm = useRealm()
  const user = useUser()
  const historic = useQuery(Historic)

  const fetchHistoric = async () => {
    try {
      const response = historic.filtered(
        "status = 'arrival' SORT(created_at DESC)",
      )

      const lastSync = await getLastSyncTimestamp()

      const formattedHistoric = response.map((historic) => {
        return {
          id: historic._id.toString(),
          licence_plate: historic.licence_plate,
          isSync: lastSync > historic.updated_at!.getTime(),
          created: dayjs(historic.created_at).format(
            '[Saída em ] DD/MM/YYYY [às] HH:mm',
          ),
        }
      })

      setvehicleHistoric(formattedHistoric)
    } catch (error) {
      console.log(error)
      Alert.alert('Historico', 'Não foi possivel carregar o historico')
    }
  }

  const fetchVehicleInUse = () => {
    try {
      const vehicle = historic.filtered("status = 'departure'")[0]
      setVehicleInUse(vehicle)
    } catch (e) {
      console.log(e)

      Alert.alert('Veiculo em Uso', 'Não foi possivel encontrar veiculo')
    }
  }

  const handleRegisterMovement = () => {
    if (vehicleInUse?._id) {
      return navigate('arrival', {
        id: vehicleInUse._id.toString(),
      })
    } else {
      navigate('departure')
    }
  }

  const handleHistoricDetails = (id: string) => {
    navigate('arrival', { id })
  }

  const progressNotification = async (
    transferred: number,
    transferable: number,
  ) => {
    const percetage = (transferred / transferable) * 100
    console.log('TRANSFERIDOS =>', `${percetage}%`)

    if (percetage === 100) {
      await saveLastSyncTimestamp()
      await fetchHistoric()
    }
  }

  useEffect(() => {
    fetchHistoric()
  }, [historic])

  useEffect(() => {
    fetchVehicleInUse()
  }, [])

  useEffect(() => {
    realm.addListener('change', () => fetchVehicleInUse())

    return () => {
      if (realm && !realm.isClosed) {
        realm.removeListener('change', fetchVehicleInUse)
      }
    }
  }, [])

  useEffect(() => {
    realm.subscriptions.update((mutableSubs, realm) => {
      const historyByUserQuery = realm
        .objects('historic')
        .filtered(`user_id = '${user!.id}'`)

      mutableSubs.add(historyByUserQuery, { name: 'historic_by_user' })
    })
  }, [realm])

  useEffect(() => {
    const syncSession = realm.syncSession

    if (!syncSession) {
      return
    }

    syncSession.addProgressNotification(
      Realm.ProgressDirection.Upload,
      Realm.ProgressMode.ReportIndefinitely,
      progressNotification,
    )

    return () => syncSession.removeProgressNotification(progressNotification)
  }, [])

  return (
    <Container>
      <Header />

      <Box>
        <CarStatus
          lincencePlate={vehicleInUse?.licence_plate}
          onPress={handleRegisterMovement}
        />

        <Title>Histórico</Title>

        <FlatList
          data={vehicleHistoric}
          keyExtractor={(i) => i.id}
          renderItem={({ item }) => (
            <HistoricCard
              data={item}
              onPress={() => handleHistoricDetails(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          ListEmptyComponent={<Label>Nenhum veiculo utilizado</Label>}
        />
      </Box>
    </Container>
  )
}
