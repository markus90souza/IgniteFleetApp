import { useRef, useState } from 'react'
import { LicencePlateInput } from '@components/LicencePlateInput'
import { Container, Box } from './styles'
import { Header } from '@components/Header'
import { TextArea } from '@components/TextArea'
import { Button } from '@components/Button'
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native'
import { lincencePlateValidate } from '@utils/licencePlateValidate'

import { useUser } from '@realm/react'
import { useRealm } from '@libs/realm'
import { Historic } from '@libs/realm/schemas/historic'
import { useNavigation } from '@react-navigation/native'

export function Departure() {
  const descriptionRef = useRef<TextInput>(null)
  const licencePlateRef = useRef<TextInput>(null)
  const [description, setDescription] = useState('')
  const [licencePlate, setLicencePlate] = useState('')
  const [isRegistering, setIsRegistering] = useState(false)

  const realm = useRealm()
  const user = useUser()

  const { goBack } = useNavigation()

  const handleDepartureRegister = () => {
    try {
      if (!lincencePlateValidate(licencePlate)) {
        licencePlateRef.current?.focus()
        return Alert.alert('Placa Inválida', 'Informe uma placa correta')
      }

      if (description.trim().length === 0) {
        descriptionRef.current?.focus()
        return Alert.alert('Finalidade', 'Informe uma descrição correta')
      }

      setIsRegistering(true)

      realm.write(() =>
        realm.create(
          'historic',
          Historic.generate({
            user_id: user!.id,
            description,
            licence_plate: licencePlate.toLocaleUpperCase(),
          }),
        ),
      )

      Alert.alert('Saída', 'Saida do veiculo registrda com sucesso')

      goBack()
    } catch (error) {
      console.log(error)
      Alert.alert('Erro', 'Não foi possivel registrar a saída')
      setIsRegistering(false)
    }
  }

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
              ref={licencePlateRef}
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

            <Button
              title="Registrar Saída"
              onPress={handleDepartureRegister}
              isLoading={isRegistering}
            />
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  )
}
