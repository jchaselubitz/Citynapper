import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import {AppRegistry, View, Text, TouchableOpacity} from 'react-native';
import StyleHelper from '../helpers/StyleHelper'
import ColorModeToggleComponent from './ColorModeToggleComponent';

const { getStyles, getColors, } = StyleHelper

class CreateTripComponent extends Component {

  render() { 
  let styles = getStyles()
  let colors = getColors()
  handleWorkHomeSave = (targetButton, label) => {
    if (targetButton !== null) {
      this.props.setDestinationLocation(targetButton)
    } else {
      this.props.navigation.navigate('Search', {searchType: 'saved', label: label})
    }
  }

  presentFavoriteButtons = () => {
    return this.props.userFavorites.map(favorite => 
    <TouchableOpacity 
      onPress={() => this.props.setDestinationLocation(favorite.item)} 
      style={styles.savedButton} >
    <View style={styles.savedButtonContainer}>
        <View style={styles.listIcon}>
          <Icon
              name='favorite'
              type='material'
              color={colors.lightIcon}
            />
          </View>

      <Text style={styles.savedButtonText}>
      {favorite.item.name}
      </Text>
  
        <TouchableOpacity onPress={() => this.props.addRemoveFavorite(favorite.item)} >
        <View style={styles.modifySavedIcon}>
          <Icon
              name='close'
              type='material'
              color={colors.lightIcon}
              size={18}
            />
          </View>
          </TouchableOpacity>
      </View>
    </TouchableOpacity>)
  }

    
    return (
      <View style={styles.tripSelectionContainer}>
        <TouchableOpacity
        style={styles.buttonSearch}
        onPress={() => this.props.navigation.navigate('Search', {searchType: 'search'})}>
        <View style={styles.searchButtonContainer}>
        <View style={styles.listIcon}>
              <Icon
                  name='search'
                  type='material'
                  color={colors.placeHolderText}
                />
              </View>
        <Text style={styles.searchButtonText}>Where are you going?</Text>
        </View>
      </TouchableOpacity>
  {/* +++++++++++++++++++++HOME+++++++++++++++++++++++++ */}
      <View style={styles.tripSelectionCard}>
        <TouchableOpacity 
          onPress={() => handleWorkHomeSave(this.props.home, "home")} 
          style={styles.savedButton} >
        <View style={styles.savedButtonContainer}>
            <View style={styles.listIcon}>
              <Icon
                  name='home'
                  type='material'
                  color={colors.lightIcon}
                />
              </View>
          <Text style={styles.savedButtonText}>Home stop</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Search', {searchType: 'saved', label: 'home'})} >
        <View style={styles.modifySavedIcon}>
          <Icon
              name='edit'
              type='material'
              color={colors.lightIcon}
              size={18}
            />
          </View>
          </TouchableOpacity>
          </View>
        </TouchableOpacity>
  {/* +++++++++++++++++++++WORK+++++++++++++++++++++++++ */}
        <TouchableOpacity 
          onPress={() => handleWorkHomeSave(this.props.work, "work")} 
          style={styles.savedButton} >
        <View style={styles.savedButtonContainer}>
            <View style={styles.listIcon}>
              <Icon
                  name='work'
                  type='material'
                  color={colors.lightIcon}
                />
              </View>
          <Text style={styles.savedButtonText}>Work stop</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Search', {searchType: 'saved', label: 'work'})} >
        <View style={styles.modifySavedIcon}>
          <Icon
              name='edit'
              type='material'
              color={colors.lightIcon}
              size={18}
            />
          </View>
          </TouchableOpacity>
          </View>
        </TouchableOpacity>
        {presentFavoriteButtons()}
        <ColorModeToggleComponent 
          toggleDarkMode={this.props.toggleDarkMode}
          darkMode={this.props.darkMode}
        />
      </View>

    </View>
    )
  }
}
 
export default CreateTripComponent;

AppRegistry.registerComponent('CityNapper', () => CreateTripComponent);