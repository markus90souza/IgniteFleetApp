import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
// STYLES
import { Box, Container } from './styles'
// COMPONENTS -> HOME
import { Header } from './components/Header'
import { CarStatus } from './components/CarStatus'
// NAVEGAÇÃO
import { useNavigation } from '@react-navigation/native'
// REALMDB
import { useQuery } from '@libs/realm'
import { Historic } from '@libs/realm/schemas/historic'

export function Home() {
  const [vehicleInUse, setVehicleInUse] = useState<Historic | null>(null)
  const { navigate } = useNavigation()

  const historic = useQuery(Historic)

  const fetchVehicle = () => {
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

  useEffect(() => {
    fetchVehicle()
  }, [])

  return (
    <Container>
      <Header />

      <Box>
        <CarStatus
          lincencePlate={vehicleInUse?.licence_plate}
          onPress={handleRegisterMovement}
        />
      </Box>
    </Container>
  )
}
