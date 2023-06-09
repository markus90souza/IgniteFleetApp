import { Box, Container } from './styles'
import { Header } from './components/Header'
import { CarStatus } from './components/CarStatus'
import { useNavigation } from '@react-navigation/native'

interface HomeProps {}

export function Home({}: HomeProps) {
  const { navigate } = useNavigation()

  const handleRegisterMovement = () => {
    navigate('departure')
  }
  return (
    <Container>
      <Header />

      <Box>
        <CarStatus onPress={handleRegisterMovement} />
      </Box>
    </Container>
  )
}
