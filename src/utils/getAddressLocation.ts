import { reverseGeocodeAsync, LocationObjectCoords } from 'expo-location'

export const getAddressLocation = async ({
  latitude,
  longitude,
}: LocationObjectCoords) => {
  try {
    const addressResponse = await reverseGeocodeAsync({ latitude, longitude })

    const street = addressResponse[0]?.street

    return street
  } catch (error) {
    console.log(error)
  }
}
