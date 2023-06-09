import { TouchableOpacity } from 'react-native'

import { Container, Title } from './styles'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeft } from 'lucide-react-native'
import { useTheme } from 'styled-components/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface HeaderProps {
  title: string
}

export const Header = ({ title }: HeaderProps) => {
  const { goBack } = useNavigation()
  const { COLORS } = useTheme()
  const { top } = useSafeAreaInsets()

  const handleGoBack = () => {
    goBack()
  }
  return (
    <Container style={{ paddingTop: top + 32 }}>
      <TouchableOpacity activeOpacity={0.3} onPress={handleGoBack}>
        <ArrowLeft size={24} color={COLORS.BRAND_LIGHT} />
      </TouchableOpacity>
      <Title>{title}</Title>
    </Container>
  )
}
