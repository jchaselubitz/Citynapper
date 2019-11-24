
import Permissions from 'react-native-permissions'
import { Alert } from 'react-native'
import NavigationService from './navigationService';



const locationAccessDenied = () => {
      NavigationService.navigate('LocationWarning')
}

const permissionsCheckpoint = (response, callback) => {
  console.log('#####', response)
  if (response === 'denied' || response === 'restricted') {
    console.log('#### I GOT THROUGH')
    Alert.alert(
      'CityNapper does not have "always" location access!',
      'Please go to Settings and change the location permissions for this app to "Always".',
      [
      {
        text: 'No way',
        onPress: () => locationAccessDenied(),
        style: 'cancel',
      },
      { text: 'Open Settings', 
        onPress: Permissions.openSettings
      },
    ],
    ) 
    return
  } else if (response === 'undetermined') {
    Alert.alert(
      'Can we access your location?',
      'CityNapper needs permission to track your "always" in order to wake you up when you are close to your stop.',
      [
        // {
        //   text: 'No way',
        //   onPress: () => locationAccessDenied(),
        //   style: 'cancel',
        // },
        { text: 'Next', 
        onPress: () => requestLocationPermissions(callback),
        }
      ],
    )
  } else {
    callback()
  }
}

const requestLocationPermissions = (callback) => {
  Permissions.request('location', { type: 'whenInUse'})
  .then(response => permissionsCheckpoint(response, callback))
}

  export default {
    permissionsCheckpoint,
  }

