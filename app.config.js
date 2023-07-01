import * as dotenv from 'dotenv'

dotenv.config()

module.exports = {
  expo: {
    name: 'Ignite Fleet',
    slug: 'ignitefleet',
    scheme: 'ignitefleet',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'cover',
      backgroundColor: '#202024',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.rockske8er.ignitefleet',
      config: {
        googleMapsApiKey: process.env.GOOGLE_MAPS_API,
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#202024',
      },
      package: 'com.rockske8er.ignitefleet',
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAPS_API,
        },
      },
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },
  plugins: [
    [
      'expo-location',
      {
        locationAlwaysAndWhenInUsePermission:
          'Allow $(PRODUCT_NAME) to use your location.',
      },
    ],
  ],
}
