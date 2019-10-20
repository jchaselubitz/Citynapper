import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import {AppRegistry, View, Text, TouchableOpacity} from 'react-native';
import StyleHelper from '../helpers/StyleHelper'
import TransitButtonComponent from './TransitButtonComponent';

const { getStyles, getColors } = StyleHelper

class ViewTripComponent extends Component {
  

  render() { 
    let styles = getStyles()
    let colors = getColors()
    return (
      <View style={styles.tripSelectionContainer}>
          {this.props.napping === false
        ?   
          <TouchableOpacity
            style={styles.buttonStartNap}
            onPress={() => this.props.napStarter()}>
            <Text style={styles.buttonNapText}>Start Nap</Text>
          </TouchableOpacity>
        :
          <TouchableOpacity
            style={styles.buttonStartNap}
            onPress={() => this.props.goToNap()}>
            <Text style={styles.buttonNapText}>Resume Nap</Text>
          </TouchableOpacity>
        }
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => this.props.rejectSelection()}>
             <Icon
                    size={24}
                    name='close'
                    type='material'
                    color={colors.cancelRed}
                   />
          </TouchableOpacity>
          <View style={{
             position: 'absolute',
             top: 24,
             left: 60,
             zIndex: 3
          }}>
            <TouchableOpacity
              style={styles.favoriteButton}
              onPress={() => this.props.addRemoveFavorite(this.props.destLocation)}>
              {this.props.isFavorite(this.props.destLocation)
              ?
                <Icon
                    size={24}
                    name='favorite'
                    type='material'
                    color={colors.listIcon}
                    />
              :
                <Icon
                      size={24}
                      name='favorite-border'
                      type='material'
                      color={colors.listIcon}
                    />
                      
              }
          </TouchableOpacity>
          </View>
          <View style={styles.tripDisplayCard}>
          {this.props.destName === "-" ? 
            "The name for this destination is missing!" 
            : 
            <>
            <View style={{
               flexDirection: 'row',
               justifyContent: 'flex-start',
               alignItems: 'center',
         
               }}>
              <Text style={styles.destinationTitleText}>{this.props.destName}</Text>
              <Text style={styles.detailText}>~{this.props.timeToDest}</Text>
            </View>
            <View>
              <Text style={styles.destinationSubtitleText}>{this.props.destAddress}</Text>
            </View>
            </> }

            <TransitButtonComponent 
              currentMode={this.props.currentMode}
              changeTransitMode={this.props.changeTransitMode}
            />
        
        </View>

    </View>
    )
  }
}
 
export default ViewTripComponent;

AppRegistry.registerComponent('CityNapper', () => ViewTripComponent);