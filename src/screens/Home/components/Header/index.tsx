import { TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'
import { Power } from 'lucide-react-native'
import { useUser, useApp } from '@realm/react'
import { Container, Greeting, Message, Name, Picture } from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const Header = () => {
  const user = useUser()
  const app = useApp()
  const { COLORS } = useTheme()

  const { top } = useSafeAreaInsets()

  const handleLogout = () => {
    app.currentUser?.logOut()
  }

  return (
    <Container style={{ paddingTop: top + 32 }}>
      <Picture
        source={{ uri: user?.profile.pictureUrl }}
        placeholder={'L38zAT}[000K]$$*KP5Q10R*}XxH'}
      />
      <Greeting>
        <Message>Olá</Message>
        <Name>{user?.profile.name}</Name>
      </Greeting>

      <TouchableOpacity activeOpacity={0.7} onPress={handleLogout}>
        <Power size={32} color={COLORS.GRAY_400} />
      </TouchableOpacity>
    </Container>
  )
}
