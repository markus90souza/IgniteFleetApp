import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const dimensions = Dimensions.get('window').width

export const Container = styled.View`
  width: ${dimensions}px;
  position: absolute;
  z-index: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 6px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-left: 4px;
`
