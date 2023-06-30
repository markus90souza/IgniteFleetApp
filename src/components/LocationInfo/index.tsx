import { IconBox, IconBoxProps } from '@components/IconBox'
import { Container, Description, Info, Label } from './styles'
type LocationInfoProps = {
  label: string
  description: string
}

type Props = LocationInfoProps & {
  icon: IconBoxProps
}

export function LocationInfo({ label, description, icon }: Props) {
  return (
    <Container>
      <IconBox icon={icon} />
      <Info>
        <Label numberOfLines={1}>{label}</Label>
        <Description numberOfLines={1}>{description}</Description>
      </Info>
    </Container>
  )
}
