import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_ASYNC_KEY = '@ignitefleet:last_sync'

export const saveLastSyncTimestamp = async () => {
  const timestamp = new Date().getTime()
  await AsyncStorage.setItem(STORAGE_ASYNC_KEY, JSON.stringify(timestamp))
}

export const getLastSyncTimestamp = async () => {
  const response = await AsyncStorage.getItem(STORAGE_ASYNC_KEY)
  return Number(response)
}
