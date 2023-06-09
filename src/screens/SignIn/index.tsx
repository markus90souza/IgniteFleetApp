import { useEffect, useState } from 'react'
// Autenticação
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import { ANDROID_CLIENT_ID, IOS_CLIENT_ID } from '@env'
// styles
import { Container, Slogan, Title } from './styles'
import backgroundImg from '@assets/background.png'
// components
import { Button } from '@components/Button'
import { Alert } from 'react-native'
import { Realm, useApp } from '@realm/react'

WebBrowser.maybeCompleteAuthSession()

export const SignIn = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const app = useApp()

  const [_, response, googleSignIn] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    scopes: ['profile', 'email'],
  })

  const handleGoogleSignIn = () => {
    setIsAuthenticated(true)

    googleSignIn().then((response) => {
      if (response.type !== 'success') {
        setIsAuthenticated(false)
      }
    })
  }

  useEffect(() => {
    if (response?.type === 'success') {
      if (response.authentication?.idToken) {
        const credentials = Realm.Credentials.jwt(
          response.authentication.idToken,
        )

        app.logIn(credentials).catch((e) => {
          console.log(e)
          Alert.alert('Opss', 'Não foi possivel conectar com sua conta Google')
          setIsAuthenticated(false)
        })
      } else {
        Alert.alert('Opss', 'Não foi possivel conectar com sua conta Google')
        setIsAuthenticated(false)
      }
    }
  }, [app, response])

  return (
    <Container source={backgroundImg}>
      <Title>Ignite Fleet</Title>
      <Slogan>Gestão de uso de veículos</Slogan>
      <Button
        title="Entrar com o Google"
        isLoading={isAuthenticated}
        onPress={handleGoogleSignIn}
      />
    </Container>
  )
}
