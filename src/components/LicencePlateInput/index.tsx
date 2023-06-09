import { useTheme } from 'styled-components/native'
import { Container, Input, Label } from './styles'
import { TextInputProps } from 'react-native'

interface LicencePlateInputProps extends TextInputProps {
  label: string
}

export function LicencePlateInput({ label, ...rest }: LicencePlateInputProps) {
  const { COLORS } = useTheme()
  return (
    <Container>
      <Label>{label}</Label>

      <Input
        maxLength={7}
        autoCapitalize="characters"
        placeholderTextColor={COLORS.GRAY_400}
        {...rest}
      />
    </Container>
  )
}
