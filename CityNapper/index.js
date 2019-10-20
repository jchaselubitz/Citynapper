/**
 * @format
 */

import { Navigation } from "react-native-navigation"
// import {AppRegistry} from 'react-native';
import App from './App';
//import {name as appName} from './app.json';

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App)

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: "navigation.playground.WelcomeScreen"
        }
      }
    });
  });



//AppRegistry.registerComponent(appName, () => App);
