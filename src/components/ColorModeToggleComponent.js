import React, { Component } from 'react';
import {AppRegistry, TouchableOpacity, Text, View } from 'react-native';
import { Icon } from 'react-native-elements'
import StyleHelper from '../helpers/StyleHelper'

const { getColors, getStyles } = StyleHelper

const ColorModeToggleComponent = (props) => {
  return <TouchableOpacity onPress={() => props.toggleDarkMode()}>
          <View style={getStyles().colorModeToggle} >
          {props.darkMode ? 
                  <Icon
                    size={24}
                    name='light-up'
                    type='entypo'
                    color={getColors().lightIcon}
                    /> 
                  :
                    <Icon
                    size={24}
                    name='moon'
                    type='entypo'
                    color={getColors().lightIcon}
                    /> }
          
            {/* <Text style={getStyles().colorModeToggleText}>{props.darkMode ? "On" : "Off" }</Text> */}
          </View>
          </TouchableOpacity>
       
}



export default ColorModeToggleComponent

AppRegistry.registerComponent('CityNapper', () => ColorModeToggleComponent);