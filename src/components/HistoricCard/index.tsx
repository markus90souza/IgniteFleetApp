import { TouchableOpacityProps } from 'react-native'
import { useTheme } from 'styled-components/native'
import { Check, ClockClockwise } from 'phosphor-react-native'
import { Container, Departure, Info, LicencePlate } from './styles'

export type HistoricCardProps = {
  id: string
  licence_plate: string
  created: string
  isSync: boolean
}

type Props = TouchableOpacityProps & {
  data: HistoricCardProps
}

export const HistoricCard = ({ data, ...rest }: Props) => {
  const { created, isSync, licence_plate } = data
  const { COLORS } = useTheme()
  return (
    <Container activeOpacity={0.7} {...rest}>
      <Info>
        <LicencePlate>{licence_plate}</LicencePlate>
        <Departure>{created}</Departure>
      </Info>

      {isSync ? (
        <Check size={24} color={COLORS.BRAND_MID} />
      ) : (
        <ClockClockwise size={24} color={COLORS.GRAY_400} />
      )}
    </Container>
  )
}
