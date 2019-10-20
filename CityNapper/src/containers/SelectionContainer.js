import React, { Component } from 'react';
import {AppRegistry } from 'react-native';
import {Button} from 'react-native-elements';
import MapContainer from './MapContainer'
import { withNavigation } from 'react-navigation'

class SelectionContainer extends Component {
  static navigationOptions = { header: null }
  render() { 
    return (
      <>
      <View style={{
          flex: 6,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
 
          <View style={{
              flex: 3, 
              backgroundColor: NapColors.white,
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
            <MapContainer
              currentLatitude={this.props.currentLatitude}
              currentLongitude={this.props.currentLongitude}
              destLatitude={this.props.destLatitude}
              destLongitude={this.props.destLongitude}
              routeCoords={this.props.routeCoords}
              x={this.props.x}
            />
          </View>
          <View style={{
              flex: 1, 
              backgroundColor: NapColors.white,
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'center'
            }}>
              <Text>{this.props.destName !== "" ? this.props.destName : ""}</Text>
            </View>
          </View>
          <View style={{
              flex: 2, 
              backgroundColor: NapColors.white,
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
            <View >
         
            <Button
              title="Search"
              type="outline" 
              onPress={() => this.props.navigation.navigate('Search', {
                currentLatitude: this.props.currentLatitude,
                currentLongitude: this.props.currentLongitude,
                setDestinationLocation: this.props.setDestinationLocation,
              })}
             />

            </View>

            <View style={{
              flexDirection: 'row',
              justifyContent: 'center'
            }}>
              <Button buttonStyle={{margin: 10}}  title="Start Nap" onPress={() => this.props.acceptSelection()}/>
              <Button buttonStyle={{margin: 10}} title="End Nap" onPress={() => this.props.dropBoundary(this.props.destName)}/>
            </View>
          </View>
  
        </View>
      </>
     );
  }
}




export default withNavigation(SelectionContainer)
 
AppRegistry.registerComponent('CityNapper', () => SelectionContainer);