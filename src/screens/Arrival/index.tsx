import {
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

type RouteParams = {
  id: string
}

export const Arrival = () => {
  const route = useRoute()

  const { id } = route.params as RouteParams

  const { goBack } = useNavigation()
  const historic = useObject(Historic, new BSON.UUID(id))
  const realm = useRealm()
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

  return (
    <Container>
      <Header title="Chegada" />

      <Box>
        <Label>Placa do veiculo</Label>
        <LicencePlate>{historic?.licence_plate}</LicencePlate>

        <Label>Finalidade</Label>
        <Description>{historic?.description}</Description>

        <Footer>
          <IconButton icon={X} />
          <Button title="Registrar Chegada" />
        </Footer>
      </Box>
    </Container>
  )
}
