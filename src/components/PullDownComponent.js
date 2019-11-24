import React, { Component } from 'react'; 
import StyleHelper from '../helpers/StyleHelper'
import { Icon } from 'react-native-elements';
import { AppRegistry, View } from 'react-native';

const { getStyles, getColors } = StyleHelper

const PullDownComponent = () => {
    return (
      <View style={getStyles().pulldownEr} >  
        <View style={getStyles().pulldownErLine1}/>
        <View style={getStyles().pulldownErLine2}/>
      </View>
      )   
}

export default PullDownComponent


AppRegistry.registerComponent('CityNapper', () => PullDownComponent);