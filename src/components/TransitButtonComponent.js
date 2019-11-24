 import React, { Component } from 'react';
 import { Icon } from 'react-native-elements';
 import {AppRegistry, View, Text, TouchableOpacity} from 'react-native';
 import StyleHelper from '../helpers/StyleHelper'

 const { getStyles } = StyleHelper

 

 class TransitButtonComponent extends Component {
  
   render() { 
    let styles = getStyles()
     return (
      <View style={styles.transitButtonContainer}>

        <TouchableOpacity onPress={() => this.props.changeTransitMode('private')}>
          <View style={this.props.currentMode() === 'Driving' ? styles.actionToggleSelectedFIRST : styles.actionToggleUnselectedFIRST}>
            <Text style={styles.actionToggleText}>{'Private'}</Text>
          </View>
        </TouchableOpacity>
    <View style={styles.actionButtonDivider}/>
        <TouchableOpacity onPress={() => this.props.changeTransitMode('bus')}>
        <View style={this.props.currentMode() === 'Bus' ? styles.actionToggleSelected : styles.actionToggleUnselected}>
            <Text style={styles.actionToggleText}>{'Bus'}</Text>
         </View>
        </TouchableOpacity>
    <View style={styles.actionButtonDivider}/>
        <TouchableOpacity onPress={() => this.props.changeTransitMode('train')}>
        <View style={this.props.currentMode() === 'Train' ? styles.actionToggleSelected : styles.actionToggleUnselected}>
            <Text style={styles.actionToggleText}>{'Train'}</Text>
         </View>
        </TouchableOpacity>
    <View style={styles.actionButtonDivider}/>
        <TouchableOpacity onPress={() => this.props.changeTransitMode('subway')}>
        <View style={this.props.currentMode() === 'Subway' ? styles.actionToggleSelectedLAST : styles.actionToggleUnselectedLAST}>
            <Text style={styles.actionToggleText}>{'Subway'}</Text>
         </View>
        </TouchableOpacity>
        
      </View>
      );
   }
 }
  
 export default TransitButtonComponent;
 
 AppRegistry.registerComponent('CityNapper', () => TransitButtonComponent);