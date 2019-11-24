import React, { Component } from 'react';
import StyleHelper from '../helpers/StyleHelper'
import { Icon, ListItem} from 'react-native-elements';
import PullDownComponent from './PullDownComponent'
import {AppRegistry, View, FlatList, TextInput, Text} from 'react-native';
import { Divider } from 'react-native-elements';

const { getStyles, getColors } = StyleHelper

class SearchComponent extends Component {

   render () {
    let styles = getStyles()
    let colors = getColors()
     return (
       
      <View>
       <View>
       <View style={styles.modalHeader}/>
          <TextInput
            style={styles.searchBar}
            placeholder="Where are you going?"
            placeholderTextColor={colors.placeHolderText}
            onChangeText={text => this.props.setSearchText(text)}
            autoCorrect={false}    
          />
        </View>
        <PullDownComponent />
        <View style={styles.flatList}>
        
        <FlatList 
          data={this.props.presentRecent()} 
          extraData={this.props.userFavorites}
          keyboardShouldPersistTaps="always"
          renderItem={({item}) => 
          <>
          <View style={{
            flex: 10,
            flexDirection: 'row',
            // marginLeft: 8
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
                onPress={() => this.props.handleSelection(item)}
              />
            </View>
              <View style={styles.listIcon}>
              {this.props.isFavorite(item) ? 
              <Icon
                  name={'favorite'}
                  type='material'
                  color={colors.listIcon}
                  onPress={() => this.props.addRemoveFavorite(item)}
                />
                : 
              <Icon
                  name={'favorite-border'}
                  type='material'
                  color={colors.listIcon}
                  onPress={() => this.props.addRemoveFavorite(item)}
                />
              }
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

export default SearchComponent

AppRegistry.registerComponent('CityNapper', () => SearchComponent);