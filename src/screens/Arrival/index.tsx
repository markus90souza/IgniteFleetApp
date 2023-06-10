import { Text } from 'react-native'

import {
  Box,
  Container,
  Description,
  Footer,
  Label,
  LicencePlate,
} from './styles'
import { useRoute } from '@react-navigation/native'
import { Header } from '@components/Header'
import { Button } from '@components/Button'

interface ArrivalProps {}

type RouteParams = {
  id: string
}

export function Arrival() {
  const route = useRoute()

  const { id } = route.params as RouteParams
  return (
    <Container>
      <Header title="Chegada" />

      <Box>
        <Label>Placa do veiculo</Label>
        <LicencePlate>JJE9392</LicencePlate>

        <Label>Finalidade</Label>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et
          qui quas quam voluptate minima veritatis sed possimus quae magni eum
          aperiam earum sapiente repudiandae est amet consequatur, doloribus
          dolor!
        </Description>

        <Footer>
          <Button title="Registrar Chegada" />
        </Footer>
      </Box>
    </Container>
  )
}
