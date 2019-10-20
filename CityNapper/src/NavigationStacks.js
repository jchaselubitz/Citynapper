import { createStackNavigator } from 'react-navigation'
import SearchContainer from './containers/SearchContainer'
import NapContainer from './containers/NapContainer'
import TripContainer from './containers/TripContainer'
import LocationErrorContainer from './containers/LocationErrorContainer'
import StyleHelper from './helpers/StyleHelper'
import {AppRegistry} from 'react-native';

const { getStyles, getColors } = StyleHelper

const TripStack = createStackNavigator(
  {
    Trip: {
      screen: TripContainer
    },
    Search: {
      screen: SearchContainer
    },
    Nap: {
      screen: NapContainer
    },
    LocationWarning: {
      screen: LocationErrorContainer,
      transparentCard: true,
      navigationOptions: {
        gesturesEnabled: false,
        
    },
    },
  },
  {
    mode: 'modal',
    header: null,
  },
);

export default TripStack

AppRegistry.registerComponent('CityNapper', () => TripStack);

