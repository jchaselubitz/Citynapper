//HomeScreen
import React, {Component} from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';
import * as Polyline from '@mapbox/polyline'
import Boundary, {Events} from 'react-native-boundary';
import { createAppContainer } from 'react-navigation';
import NavigationService from './src/services/navigationService'
import Permissions from 'react-native-permissions'
import Keys from './src/helpers/Keys'
import permissionsService from './src/services/permissionsService'
import TripStack from './src/NavigationStacks'
import pushNotification from './src/services/pushNotification';
import StyleHelper from './src/helpers/StyleHelper'

export default class App extends Component  {

  state = {
    error: null,
    userFavorites : [],
    currentLatitude: null,
    currentLongitude: null,
    destLocation: null,
    destLatitude: null,
    destLongitude: null,
    destName: "-",
    destAddress: '',
    routeCoords: [],
    x: 'true',
    timeToDest: null,
    secondsToDest: null,
    eta: null,
    napping: false,
    mode: 'transit',
    transitMode: 'bus',
    homeButton: null,
    workButton: null,
    recentSelections: [],
    darkMode: false
  }

  componentDidMount () {
    console.log('#### initialModeState', this.state.darkMode)
    this.checkForExistingUser()
    
    this.checkMapLocationPermissions(() => this.watchLocation())
  } 

  toggleDarkMode = () => {
    console.log('#### toggle dark mode',  )
    StyleHelper.setColorMode(!this.state.darkMode)
    this.setState({ darkMode: !this.state.darkMode }, () => this.sendToLocalStorage("darkMode", this.state.darkMode))
  }

  checkForExistingUser = () => {
    try {
      AsyncStorage.multiGet(['userFavorites', 'homeButton', 'workButton', 'mode', 'transitMode', 'recentSelections', "darkMode"], (error, stores) => {
        if (stores !== null) { 
          stores.map((result, i, store) => {
            this.setUserData( result[0], result[1])
          })
        } 
      })  
    } catch (error) {
      console.log("#### runWakeUp error", error)
    }
  }

  setUserData = (key, valueIn) => {
    value = JSON.parse(valueIn)
     
    switch (key) {
      case 'darkMode':
        if (value === "true" || value === "false")
          this.setState({ darkMode: value}, )
      case 'mode':
        if (value === "transit" || value === "driving")
          this.setState({ mode: value});
      case 'transitMode':
        if (value === "bus" || value === "train" | value === "subway")
          this.setState({ mode: value});
      default:
        if (value !== null)
          this.setState({ [key]: value})
    }
    StyleHelper.setColorMode(this.state.darkMode)
  }


  checkMapLocationPermissions = (nextFunction) => {
    Permissions.check('location').then(response => 
      permissionsService.permissionsCheckpoint(response, nextFunction))
  }

  checkBoundaryLocationPermissions = (nextFunction) => {
    Permissions.check('location', { type: 'always' }).then(response => 
      permissionsService.permissionsCheckpoint(response, nextFunction))
  }

  
  watchLocation = () => {
    navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          currentLatitude: position.coords.latitude,
          currentLongitude: position.coords.longitude,
          error: null,
        })
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true,
        timeout: 200000,
        maximumAge: 1000,
        useSignificantChanges: false
      },
    )
  } 

//============= SETTER FUNCTIONS ======================

setAsHomeWorkButton = (item, label) => {
  label === "home" 
  ?
  this.setState({ homeButton: item }, () => this.sendToLocalStorage('homeButton', item))
  :
  this.setState({ workButton: item }, () => this.sendToLocalStorage('workButton', item));
}

sendToLocalStorage = async (key, item) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.log('#### sendToLocalStorage', error)
  }
}

addRecentSelection = (item) => {
  newArray = this.state.recentSelections.length > 2 ? this.state.recentSelections.slice(1) : this.state.recentSelections
  locationObject = {item, id: `${item.location.latitude},${item.location.longitude}`}
    if (!newArray.map( i => i.id).includes(locationObject.id)) {
      this.setState({ recentSelections: [...newArray, locationObject ]});  
    }
}

addRemoveFavorite = (item) => {
  locationObject = {item, id: `${item.location.latitude},${item.location.longitude}`}
  if (this.state.userFavorites.map( l => l.id).includes(locationObject.id))
  this.setState({ 
    userFavorites: this.state.userFavorites.filter((favorite) => favorite.id !== locationObject.id)
  }, () => this.sendToLocalStorage('userFavorites', this.state.userFavorites))
  else {
    this.setState({ 
      userFavorites: [...this.state.userFavorites, locationObject]
    }, () => this.sendToLocalStorage('userFavorites', this.state.userFavorites))
  }
}

generateETA = (callback) => {
  const now = new Date()
  now.setSeconds(now.getSeconds()+this.state.secondsToDest - 180);
  this.setState({eta: now}, callback);
}


setDestinationLocation = (destination) => {
  this.addRecentSelection(destination)
  this.checkBoundaryLocationPermissions()
  this.setState({ 
    destLocation: destination,
    destLatitude: destination.location.latitude,
    destLongitude: destination.location.longitude,
    destName: destination.name,
    destAddress: destination.address
  }, () => this.setRoute());
}

isFavorite = (item) => {
  return this.state.userFavorites.map( l => l.id).includes(`${item.location.latitude},${item.location.longitude}`)
}

clearDestinationSelection = (link) => {
  this.setState({ 
    destLatitude: null,
    destLongitude: null,
    destName: "-",
    destAddress: '',
    routeCoords: [],
    napping: false,
   }, link )
}

//========== ROUTE MAPPING FUNCTIONS ===============

changeTransitMode = (newMode) => {
  // console.log('#### newMode', newMode)
  switch (newMode) {
    case 'private':
      this.sendToLocalStorage("mode", "driving")
      this.setState({ mode: "driving" }, () => this.setRoute()) 
      break
    case 'bus':
      this.sendToLocalStorage("mode", "transit")
      this.sendToLocalStorage("transitMode", "bus")
      this.setState({ mode: "transit", transitMode: "bus" }, () => this.setRoute()) 
      break
    case 'subway':
      this.sendToLocalStorage("mode", "transit")
      this.sendToLocalStorage("transitMode", "subway")
      this.setState({ mode: "transit", transitMode: "subway" }, () => this.setRoute()) 
      break
    case 'train':
      this.sendToLocalStorage("mode", "transit")
      this.sendToLocalStorage("transitMode", "train")
      this.setState({ mode: "transit", transitMode: "train" }, () => this.setRoute()) 
      break
    default:
      this.sendToLocalStorage("mode", "transit")
      this.sendToLocalStorage("transitMode", "bus")
      this.setState({ mode: "transit", transitMode: "bus" }, () => this.setRoute())
    }

  }
  
getCurrentMode = () => {
  console.log('#### getCurrentMode', this.props.transitMode)
  mode = this.state.mode === 'transit' ? this.state.transitMode : this.state.mode
  return `${mode[0].toUpperCase()}${mode.slice(1)}`
}

setRoute = () => {
  if (this.state.currentLatitude != null && this.state.destLatitude!=null)
   {
     let concatStart = this.state.currentLatitude +","+this.state.currentLongitude
     let concatDestination = this.state.destLatitude+","+this.state.destLongitude
     this.getDirections(concatStart, concatDestination)
     this.getTimeToDest(concatStart, concatDestination)
   } else {
     alert('It seems you have chosen a destination that is too far away. Try one that is a little closer.')
   }
}

async getDirections(tripOrigin, tripDestination) {
  try {
      transitMode = this.state.mode === 'transit' ? this.state.transitMode : ""
      let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${tripOrigin}&destination=${tripDestination}&mode=${this.state.mode}&transit_mode=${transitMode}&key=${Keys.GoogleKey}`)
      let respJson = await resp.json();
      let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
      let coords = points.map((point, index) => {
          return  {
              latitude : point[0],
              longitude : point[1]
          }
      })
      this.setState({routeCoords: coords})
      return coords
  } catch(error) {
      return error
  }
}

async getTimeToDest(tripOrigin, tripDestination) {
  try {
      transitMode = this.state.mode === 'transit' ? this.state.transitMode : ""
      let resp = await fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${tripOrigin}&destinations=${tripDestination}&mode=${this.state.mode}&transit_mode=${transitMode}&key=${Keys.GoogleKey}`)
      let respJson = await resp.json();
        let timeToDest = respJson.rows[0].elements[0].duration.text
        let secondsToDest = respJson.rows[0].elements[0].duration.value
      this.setState({timeToDest, secondsToDest})
  } catch(error) {
      alert("Looks like we couldn't calculate the length of your trip")
      console.log('#### getTimeToDest error', error)
      return error
  }
}



//========== BOUNDARY FUNCTIONS ===============

setBoundary = () => {
    if (this.state.destName !== "-")
    Boundary.add({
      lat: this.state.destLatitude, 
      lng: this.state.destLongitude,
      radius: 500, // in meters
      id: this.state.destName,
    })
      .then(() => console.log("boundary set"))
      .catch(e => console.error("error :(", e));
   
    Boundary.on(Events.ENTER, id => {
      this.geoNotification()
      // this.startVibrationFunction()
    });
}

dropBoundary = () => {
  Boundary.removeAll()
  .then(() => console.log('Location Dropped'))
  .catch(e => console.log('failed to drop location', e))
}


//============= NAP FUNCTIONS ======================

startNap = () => {
  pushNotification.requestPermissions()
  this.generateETA(() => this.scheduleNotification())
  this.checkBoundaryLocationPermissions(() => this.setBoundary())
  this.setState({ napping: true  });
} 
   

endNap = () => {
  this.dropBoundary()
  // this.stopVibrationFunction()
  this.clearDestinationSelection()
  pushNotification.cancelAllLocalNotifications()
}

//=========== ALERT ==================

scheduleNotification = () => {
  this.state.secondsToDest > 200 ?
  pushNotification.scheduledNotification(this.state.destName, this.state.eta) 
  :
  null
}
geoNotification = () => {
  pushNotification.localNotification(this.state.destName)
}

//======================================= Colors =================================

//======================================= VIEWS =================================

  render() {
    return <AppContainer screenProps={{
      error: this.state.error,
      userFavorites: this.state.userFavorites,
      currentLatitude: this.state.currentLatitude,
      currentLongitude: this.state.currentLongitude,
      changeTransitMode: this.changeTransitMode,
      currentMode: this.getCurrentMode,
      destLocation: this.state.destLocation,
      destLatitude: this.state.destLatitude,
      destLongitude: this.state.destLongitude,
      destName: this.state.destName,
      destAddress: this.state.destAddress,
      isFavorite: this.isFavorite,
      routeCoords: this.state.routeCoords,
      x: this.state.x,
      timeToDest: this.state.timeToDest,
      recentSelections: this.state.recentSelections,
      napping: this.state.napping,
      startNap: this.startNap,
      endNap: this.endNap,
      rejectSelection: this.rejectSelection,
      addRemoveFavorite: this.addRemoveFavorite,
      setDestinationLocation: this.setDestinationLocation,
      dropBoundary: this.dropBoundary,
      clearDestinationSelection: this.clearDestinationSelection,
      setAsHomeWorkButton: this.setAsHomeWorkButton,
      homeButton: this.state.homeButton,
      workButton: this.state.workButton,
      toggleDarkMode: this.toggleDarkMode,
      darkMode: this.state.darkMode,
    }}
    ref={navigatorRef => {
      NavigationService.setTopLevelNavigator(navigatorRef)
    }}
    />;
  }
}

const AppContainer = createAppContainer(TripStack);
console.disableYellowBox = true;

AppRegistry.registerComponent('CityNapper', () => App);

