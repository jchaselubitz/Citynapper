import React, { Component } from 'react';
import StyleHelper from '../helpers/StyleHelper'
import PullDownComponent from './PullDownComponent'
import { Icon, ListItem } from 'react-native-elements';
import { AppRegistry, View, FlatList, TextInput } from 'react-native';
import { Divider } from 'react-native-elements';

const { getStyles, getColors } = StyleHelper

class SavedComponent extends Component {
  
   render () {
    let styles = getStyles()
    let colors = getColors()
     return (
      <View>
       <View>
       <View style={styles.modalHeader}/>
          <TextInput
            style={styles.searchBar}
            placeholder="Search for a location to save."
            placeholderTextColor={colors.placeHolderText}
            onChangeText={text => this.props.setSearchText(text)}
            autoCorrect={false}    
          />
        </View>
        
        <PullDownComponent />
        
        <View style={styles.flatList}>
        <FlatList 
          data={this.props.presentRecent()} 
          keyboardShouldPersistTaps="always"
          renderItem={({item}) => 
          <>
          <View style={{
            flex: 10,
            flexDirection: 'row',
          }}>
            
            <View style={{
              flex: 9
            }}>
              <ListItem
                title={item.name}
                subtitle={item.address}
                containerStyle={styles.listItem}
                titleStyle={styles.listItem}
                subtitleStyle={styles.listItem}
                onPress={() => this.props.handleFavoriteSelection(item)}
              />
            </View>
              <View style={styles.listIcon}>
              <Icon
                  name={'add'}
                  type='material'
                  color={colors.listIcon}
                  onPress={() => this.props.handleFavoriteSelection(item)}
                />
              </View>
          </View>
            <Divider style={styles.listDivider} />
            </>
          } 
          keyExtractor={item => item.address} 
          
          />
          </View>
          <View>
          </View>
        </View>
        
     )
   }
}

export default SavedComponent

AppRegistry.registerComponent('CityNapper', () => SavedComponent);