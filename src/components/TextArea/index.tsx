import { useTheme } from 'styled-components/native'
import { Container, Input, Label } from './styles'
import { TextInput, TextInputProps } from 'react-native'
import { forwardRef } from 'react'

interface Props extends TextInputProps {
  label: string
}

// eslint-disable-next-line react/display-name
export const TextArea = forwardRef<TextInput, Props>(
  ({ label, ...rest }, ref) => {
    const { COLORS } = useTheme()
    return (
      <Container>
        <Label>{label}</Label>

        <Input
          ref={ref}
          multiline
          autoCapitalize="sentences"
          placeholderTextColor={COLORS.GRAY_400}
          {...rest}
        />
      </Container>
    )
  },
)
