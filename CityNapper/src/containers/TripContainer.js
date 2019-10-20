import React, { Component } from 'react';
import MapComponent from '../components/MapComponent'
import CreateTripComponent from '../components/CreateTripComponent'
import ViewTripComponent from '../components/ViewTripComponent'
import {AppRegistry, View } from 'react-native';

class TripContainer extends Component {
  static navigationOptions = { header: null }


  render() {
    
    const currentLatitude = this.props.screenProps.currentLatitude
    const currentLongitude = this.props.screenProps.currentLongitude
    const currentMode = this.props.screenProps.currentMode
    const changeTransitMode = this.props.screenProps.changeTransitMode
    const destLocation = this.props.screenProps.destLocation
    const destLatitude = this.props.screenProps.destLatitude
    const destLongitude = this.props.screenProps.destLongitude
    const destName = this.props.screenProps.destName
    const destAddress = this.props.screenProps.destAddress
    const timeToDest = this.props.screenProps.timeToDest
    const startNap = this.props.screenProps.startNap
    const userFavorites = this.props.screenProps.userFavorites
    const isFavorite = this.props.screenProps.isFavorite
    const napping = this.props.screenProps.napping
    const routeCoords = this.props.screenProps.routeCoords
    const x = this.props.screenProps.x
    const dropBoundary = this.props.screenProps.dropBoundary
    const clearDestinationSelection = this.props.screenProps.clearDestinationSelection
    const setDestinationLocation = this.props.screenProps.setDestinationLocation
    const addRemoveFavorite = this.props.screenProps.addRemoveFavorite
    const home = this.props.screenProps.homeButton
    const work = this.props.screenProps.workButton
    const darkMode = this.props.screenProps.darkMode
    const toggleDarkMode = this.props.screenProps.toggleDarkMode


    napStarter = () => {
      startNap()
      goToNap()
    }

    goToNap = () => {
      this.props.navigation.navigate('Nap')
    }

    rejectSelection = () => {
      dropBoundary()
      clearDestinationSelection(() => this.props.navigation.navigate('Trip'))

    }

//======================================= RENDER =================================
  
    setSelectorState = () => {
      return destLatitude !== null 
      ? 
      <ViewTripComponent 
        napping={napping}
        napStarter={napStarter}
        goToNap={goToNap}
        destLocation={destLocation}
        destName={destName}
        destAddress={destAddress}
        rejectSelection={rejectSelection}
        addRemoveFavorite={addRemoveFavorite}
        isFavorite={isFavorite}
        userFavorites={userFavorites}
        currentMode={currentMode}
        changeTransitMode={changeTransitMode}
        timeToDest={timeToDest}
      /> 
      : 
      <CreateTripComponent 
        setDestinationLocation={setDestinationLocation}
        navigation={this.props.navigation}
        userFavorites={userFavorites}
        addRemoveFavorite={addRemoveFavorite}
        home={home}
        work={work}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      /> 
    }

    
    return (
      <View style={{
          flex: 1,
          flexDirection: 'column',
        }}>
        <MapComponent
          currentLatitude={currentLatitude}
          currentLongitude={currentLongitude}
          destLatitude={destLatitude}
          destLongitude={destLongitude}
          routeCoords={routeCoords}
          x={x}
        />
        {setSelectorState()}
      </View>

    )      
    }
}

export default TripContainer

AppRegistry.registerComponent('CityNapper', () => TripContainer);

