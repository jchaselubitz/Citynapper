import React, { Component } from 'react';
import SearchComponent from '../components/SearchComponent'
import SavedComponent from '../components/SavedComponent'
import RNReverseGeocode from "@kiwicom/react-native-reverse-geocode";
import StyleHelper from "../helpers/StyleHelper"
import {AppRegistry, View } from 'react-native';

const { getColors, getStyles } = StyleHelper

class SearchContainer extends Component {
  static navigationOptions = { header: null }

  state = {
    searchText: '',
    searchResults: [],
    error: null,
  }

   render () {
    let styles = getStyles()
    const { navigation } = this.props;
    const currentLatitude = this.props.screenProps.currentLatitude
    const currentLongitude = this.props.screenProps.currentLongitude
    const setDestinationLocation = this.props.screenProps.setDestinationLocation
    const userFavorites = this.props.screenProps.userFavorites
    const addRemoveFavorite = this.props.screenProps.addRemoveFavorite
    const isFavorite = this.props.screenProps.isFavorite
    const setAsHomeWorkButton = this.props.screenProps.setAsHomeWorkButton
    const recentSelections = this.props.screenProps.recentSelections
    const label = this.props.navigation.getParam('label')
    const searchType = this.props.navigation.getParam('searchType')


    const presentRecent = () => {
      if (this.state.searchResults !== null && this.state.searchResults.length === 0){
        return recentSelections.map(selection => selection.item)
      } else {
        return this.state.searchResults
      }
    }

    const searchRegion = () => ({
      latitude: !!currentLatitude ? currentLatitude : 0,
      longitude: !!currentLongitude ? currentLongitude : 0,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    });
    
    const setSearchText = (text) => {
      this.setState({
        searchText: text
      }, () => placeSearch(this.state.searchText))
    }
    
    const placeSearch = (searchText) => {
      RNReverseGeocode.searchForLocations(
        searchText,
        searchRegion(),
        (err, results) => {
          this.setState({
            error: err,
            searchResults: this.state.searchText !== "" && this.state.searchText !== null ? results : []
          });
        }
      );
    }

    const handleSelection = (item) => {
      setDestinationLocation(item)
      navigation.navigate('Trip')
    }

    const handleFavoriteSelection = (item) => {
      setAsHomeWorkButton(item, label)
      navigation.navigate('Trip')
    }



    const setSearchType = () => {
      return searchType === 'search'
      ?
      <SearchComponent 
        setSearchText={setSearchText}
        userFavorites={userFavorites}
        handleSelection={handleSelection}
        isFavorite={isFavorite}
        addRemoveFavorite={addRemoveFavorite}
        presentRecent={presentRecent}
      />
      :
       <SavedComponent 
        setAsHomeWorkButton={setAsHomeWorkButton}
        label={label}
        handleFavoriteSelection={handleFavoriteSelection}
        setSearchText={setSearchText}
        presentRecent={presentRecent}

      />
    }
    
     return (
     <View style={getStyles().searchBackground}>
      {setSearchType()} 
      </View>
     )
    
   }
}

export default SearchContainer

AppRegistry.registerComponent('CityNapper', () => SearchContainer);