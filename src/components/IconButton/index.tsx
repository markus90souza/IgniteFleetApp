import { TouchableOpacityProps } from 'react-native'

import { IconProps } from 'phosphor-react-native'
import { Container } from './styles'
import { useTheme } from 'styled-components/native'

// eslint-disable-next-line no-undef
export type IconPropsBox = (props: IconProps) => JSX.Element

interface IconButtonProps extends TouchableOpacityProps {
  icon: IconPropsBox
}

export function IconButton({ icon: Icon, ...rest }: IconButtonProps) {
  const { COLORS } = useTheme()

  return (
    <Container activeOpacity={0.7} {...rest}>
      <Icon size={24} color={COLORS.BRAND_LIGHT} />
    </Container>
  )
}
