import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SearchContainer from './containers/SearchContainer'
import NapContainer from './containers/NapContainer'
import TripContainer from './containers/TripContainer'
import LocationErrorContainer from './containers/LocationErrorContainer'
import {AppRegistry} from 'react-native';

const TripStack = createStackNavigator(
  {
    Trip: {
      screen: TripContainer,
    },
    Search: {
      screen: SearchContainer,
    },
    Nap: {
      screen: NapContainer,
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

export default createAppContainer(TripStack);

AppRegistry.registerComponent('CityNapper', () => TripStack);
