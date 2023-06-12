import 'react-native-get-random-values'
import '@libs/dayjs'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components/native'

import theme from '@theme/index'
import { Loading } from '@components/Loading'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { StatusBar } from 'react-native'

import { AppProvider, UserProvider } from '@realm/react'
import { REALM_APP_ID } from '@env'
import { SignIn } from '@screens/SignIn'
import { Routes } from '@routes/index'
import { RealmProvider, syncConfig } from '@libs/realm'
import { TopMessage } from '@components/TopMessage'
import { WifiSlash } from 'phosphor-react-native'
import { useNetInfo } from '@react-native-community/netinfo'

export const App = () => {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  const netInfo = useNetInfo()

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <AppProvider id={REALM_APP_ID}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider
          style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_800 }}
        >
          {!netInfo.isConnected && (
            <TopMessage icon={WifiSlash} title="Voce esta offline" />
          )}
          <StatusBar
            barStyle={'light-content'}
            backgroundColor={'transparent'}
            translucent
          />

          <UserProvider fallback={SignIn}>
            <RealmProvider sync={syncConfig} fallback={Loading}>
              <Routes />
            </RealmProvider>
          </UserProvider>
        </SafeAreaProvider>
      </ThemeProvider>
    </AppProvider>
  )
}
