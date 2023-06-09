import { LicencePlateInput } from '@components/LicencePlateInput'
import { Container, Box } from './styles'
import { Header } from '@components/Header'
import { TextArea } from '@components/TextArea'
import { Button } from '@components/Button'
import { useRef, useState } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
} from 'react-native'

interface DepartureProps {}

export function Departure({}: DepartureProps) {
  const descriptionRef = useRef<TextInput>(null)

  const [description, setDescription] = useState('')
  const [licencePlate, setLicencePlate] = useState('')

  const handleDepartureRegister = () => {}

  const keyboardAvoidingViewBehavior =
    Platform.OS === 'android' ? 'height' : 'position'
  return (
    <Container>
      <Header title="Saída" />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={keyboardAvoidingViewBehavior}
      >
        <ScrollView>
          <Box>
            <LicencePlateInput
              label="Placa do veiculo"
              placeholder="BRA0112"
              onSubmitEditing={() => descriptionRef.current?.focus()}
              returnKeyType="next"
              onChangeText={setLicencePlate}
            />

            <TextArea
              ref={descriptionRef}
              label="Finalidade"
              placeholder="Vou utilizar o veiculo para..."
              blurOnSubmit
              returnKeyType="send"
              onChangeText={setDescription}
              onSubmitEditing={handleDepartureRegister}
            />

            <Button title="Registrar Saída" onPress={handleDepartureRegister} />
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  )
}
