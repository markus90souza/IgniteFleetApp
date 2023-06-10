import { Car, KeyRound } from 'lucide-react-native'

import { Container, IconBox, Message, TextHighlight } from './styles'
import { useTheme } from 'styled-components'
import { TouchableOpacityProps } from 'react-native'

interface CarStatusProps extends TouchableOpacityProps {
  lincencePlate?: string | null
}

export function CarStatus({ lincencePlate = null, ...rest }: CarStatusProps) {
  const Icon = lincencePlate ? Car : KeyRound

  const message = lincencePlate
    ? `Veiculo ${lincencePlate} em uso. `
    : `Nenhum Veiculo em uso.`

  const status = lincencePlate ? 'Chegada' : 'Saída'
  const { COLORS } = useTheme()
  return (
    <Container {...rest}>
      <IconBox>
        <Icon size={32} color={COLORS.BRAND_LIGHT} />
      </IconBox>

      <Message style={{ textAlignVertical: 'center' }}>
        {message}

        <TextHighlight>{`Clique aqui para registrar a ${status} `}</TextHighlight>
      </Message>
    </Container>
  )
}
