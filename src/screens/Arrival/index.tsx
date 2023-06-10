import { Text } from 'react-native'

import { Container } from './styles'
import { useRoute } from '@react-navigation/native'

interface ArrivalProps {}

type RouteParams = {
  id: string
}

export function Arrival() {
  const route = useRoute()

  const { id } = route.params as RouteParams
  return (
    <Container>
      <Text>Arrival</Text>
    </Container>
  )
}
