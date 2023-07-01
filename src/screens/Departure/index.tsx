import { useEffect, useRef, useState } from 'react'

import { Container, Box, Message } from './styles'

import {
  Button,
  Header,
  TextArea,
  LicencePlateInput,
  Loading,
  LocationInfo,
  Map,
} from '@components/index'
import { TextInput, Alert, ScrollView } from 'react-native'
import { lincencePlateValidate } from '@utils/licencePlateValidate'

import { useUser } from '@realm/react'
import { useRealm } from '@libs/realm'
import { Historic } from '@libs/realm/schemas/historic'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import {
  LocationAccuracy,
  LocationObjectCoords,
  LocationSubscription,
  useForegroundPermissions,
  watchPositionAsync,
} from 'expo-location'
import { getAddressLocation } from '@utils/getAddressLocation'

import { Car } from 'phosphor-react-native'

export function Departure() {
  const descriptionRef = useRef<TextInput>(null)
  const licencePlateRef = useRef<TextInput>(null)
  const [description, setDescription] = useState('')
  const [licencePlate, setLicencePlate] = useState('')
  const [isRegistering, setIsRegistering] = useState(false)

  const [isLoadingLocation, setIsLoadingLocation] = useState(true)

  const [permissionStatus, requestPermission] = useForegroundPermissions()
  const [currentAddress, setCurrentAddress] = useState<string | null>(null)
  const [currentCoords, setCurrentCoords] =
    useState<LocationObjectCoords | null>(null)
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

  useEffect(() => {
    requestPermission()
  }, [])

  useEffect(() => {
    if (!permissionStatus?.granted) {
      return
    }

    let subscriber: LocationSubscription

    watchPositionAsync(
      { accuracy: LocationAccuracy.High, timeInterval: 1000 },
      (location) => {
        setCurrentCoords(location.coords)
        getAddressLocation(location.coords)
          .then((address) => {
            if (address) {
              setCurrentAddress(address)
            }
          })
          .finally(() => setIsLoadingLocation(false))
      },
    ).then((response) => (subscriber = response))

    return () => {
      subscriber.remove()
    }
  }, [permissionStatus])

  if (!permissionStatus?.granted) {
    return (
      <Container>
        <Header title="Saida" />

        <Message>
          Você precisa permitir que o aplicativo tenha acesso a localização para
          acessar essa funcionalidade. Por favor, acesse as configurações do seu
          dispositivo para conceder a permissão ao aplicativo.
        </Message>
      </Container>
    )
  }

  if (isLoadingLocation) {
    return <Loading />
  }

  return (
    <Container>
      <Header title="Saída" />

      <KeyboardAwareScrollView extraHeight={100}>
        <ScrollView>
          {currentCoords && <Map coordinates={[currentCoords]} />}
          <Box>
            {currentAddress && (
              <LocationInfo
                label="Localização Atual"
                description={currentAddress}
                icon={Car}
              />
            )}
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
      </KeyboardAwareScrollView>
    </Container>
  )
}
