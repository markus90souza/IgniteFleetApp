import { useTheme } from 'styled-components/native'
import { IconPropsBox } from '@components/IconButton'
import { Container, Title } from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface TopMessageProps {
  icon?: IconPropsBox
  title: string
}

export function TopMessage({ title, icon: Icon }: TopMessageProps) {
  const { COLORS } = useTheme()

  const { top } = useSafeAreaInsets()
  return (
    <Container style={{ paddingTop: top + 6 }}>
      {Icon && <Icon size={18} color={COLORS.GRAY_100} />}
      <Title>{title}</Title>
    </Container>
  )
}
