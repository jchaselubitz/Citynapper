
import { PushNotificationIOS } from 'react-native';


const requestPermissions = () => {
  PushNotificationIOS.requestPermissions({
    alert: true,
    badge: false,
    sound: true
  })
}

const localNotification = (destName) => {
  PushNotificationIOS.presentLocalNotification({
    alertTitle:"Wake up!!",
    alertBody: `You are getting close to ${destName}.`, 
    playSound: true, 
    soundName: 'church_chime.wav' // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
  }) 
}

const scheduledNotification = (destName, eta) => {
  console.log('#### eta in notification service', eta)
  PushNotificationIOS.scheduleLocalNotification({
    alertTitle:"Wake up!!",
    alertBody: `You are about to arrive at ${destName}.`, 
    playSound: true,
    soundName: 'church_chime.wav', 
    fireDate: eta.getTime()
  }) 
}

 

const cancelAllLocalNotifications = () => {
  PushNotificationIOS.cancelAllLocalNotifications()
}

export default {
  localNotification,
  cancelAllLocalNotifications,
  requestPermissions,
  scheduledNotification
  // endNapOnOpen
 };
