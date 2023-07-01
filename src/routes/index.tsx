import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.routes'
import Toast from 'react-native-toast-message'
import { TopMessage } from '@components/index'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const Routes = () => {
  const { top } = useSafeAreaInsets()
  return (
    <NavigationContainer>
      <Toast
        config={{
          info: ({ text1 }) => <TopMessage title={String(text1)} />,
        }}
        topOffset={top}
      />
      <AppRoutes />
    </NavigationContainer>
  )
}
