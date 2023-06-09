/* eslint-disable prettier/prettier */
import {
  AsyncMessage,
  Box,
  Container,
  Description,
  Footer,
  Label,
  LicencePlate,
} from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { IconButton } from '@components/IconButton'
import { X } from 'phosphor-react-native'
import { BSON } from 'realm'
import { useObject, useRealm } from '@libs/realm'
import { Historic } from '@libs/realm/schemas/historic'
import { Alert } from 'react-native'
import { useEffect, useState } from 'react'
import { getLastSyncTimestamp } from '@libs/async-storage/sync-storage'

type RouteParams = {
  id: string
}

export const Arrival = () => {

  const [dataNotSynced, setDataNotSynced] = useState(false)
  const route = useRoute()

  const { id } = route.params as RouteParams

  const { goBack } = useNavigation()
  const historic = useObject(Historic, new BSON.UUID(id))
  const realm = useRealm()

  const title = historic?.status === 'departure' ? 'Chegada' : 'Detalhes'
  
  const handleRemoveVehicleUsage = () => {
    Alert.alert('Cancelar', 'Cancelar a utilização do veiculo ?', [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', onPress: () => handleRemoveVehicle() },
    ])
  }

  const handleRemoveVehicle = () => {
    realm.write(() => {
      realm.delete(historic)
    })

    goBack()
  }

  const handleArrivalRegister = () => {
    try {
      if (!historic) {
        return Alert.alert(
          'Error',
          'Não foi possivel obter os dados para registrar a chegada do veiculo',
        )
      }

      realm.write(() => {
        // eslint-disable-next-line no-unused-expressions
        historic.status = 'arrival'
        historic.updated_at = new Date()
      })
      

      Alert.alert(
        'Chegada',
        'Chegada registrada com sucesso',
      )

      goBack()

    
    } catch (error) {
      console.log(error)
      Alert.alert('Error', 'Não foi possivel  registrar a chegada do veiculo')
    }
  }


  const getSyncData = async () => {

    const lastSync = await getLastSyncTimestamp()

    setDataNotSynced(historic!.updated_at.getTime() > lastSync)
    
  }

  useEffect(() => {
    getSyncData()
  },[])

  return (
    <Container>
      <Header title={title} />

      <Box>
        <Label>Placa do veiculo</Label>
        <LicencePlate>{historic?.licence_plate}</LicencePlate>

        <Label>Finalidade</Label>
        <Description>{historic?.description}</Description>

 
      </Box>

        {
          historic?.status === 'departure' && (
            <Footer>
              <IconButton icon={X} onPress={handleRemoveVehicleUsage} />
              <Button title="Registrar Chegada" onPress={handleArrivalRegister} />
            </Footer>
          )
        }

        {
          dataNotSynced && <AsyncMessage>
          Sicronização da 
          {
            historic?.status === 'departure' ? ' Partida ': ' Chegada '
          }
          pendente.
        </AsyncMessage>
        }
        
    </Container>
  )
}
