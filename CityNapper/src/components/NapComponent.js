import React, { Component } from 'react';
import {AppRegistry, View, Text, TouchableOpacity, Button} from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import StyleHelper from '../helpers/StyleHelper'
import air_conditioner from '../media/air_conditioner.mp3'
import crackling_fireplace from '../media/crackling_fireplace.mp3'
import heavy_rain from '../media/heavy_rain.mp3'
import rainforest from '../media/rainforest.mp3'
import air_conditioner_img from '../media/air_conditioner.jpg'
import fireplace_img from '../media/fireplace.jpg'
import rainforest_img from '../media/rainforest.jpg'
import rain_img from '../media/rain.jpg'


const { getStyles, getColors } = StyleHelper
//Could put this in a music manager

const sounds = [
  {
    name: 'Rainforest',
    avatar_url: rainforest_img,
    subtitle: 'Comforting sounds of rain and birds.',
    sound: rainforest
  },
  {
    name: 'Air Conditioner',
    avatar_url: air_conditioner_img,
    subtitle: 'The whitest of white noise.',
    sound: air_conditioner
  },
  {
    name: 'Crackling Fireplace',
    avatar_url: fireplace_img,
    subtitle: 'For your coziest commutes.',
    sound: crackling_fireplace
  },
  {
    name: 'Heavy Rain',
    avatar_url: rain_img,
    subtitle: 'Like Air Conditioner, but wetter.',
    sound: heavy_rain
  },
  
]


export default class NapContainer extends Component {
  
  render () {
    let styles = getStyles()
    let colors = getColors()
     return (
      <View style={styles.napContainer}>
      <View style={{
         position: 'absolute',
         top: 24,
         left: 20,
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
        <TouchableOpacity
          style={styles.endNapButton} 
          onPress={() => this.props.handleClick()}
          >
          <Text style={styles.endNapText}>End Nap</Text>
        </TouchableOpacity>
        <View style={styles.tripDisplayCard}>
          <Text style={styles.destinationTitleText}>{this.props.destName}</Text>
          <Text style={styles.destinationSubtitleText}>{this.props.destAddress}</Text>
        
        <View style={styles.divider}/>

          <View>
          {
            sounds.map((s, i) => (
              <ListItem
                key={i}
                leftAvatar={{ source:  s.avatar_url }}
                title={s.name}
                subtitle={s.subtitle}
                containerStyle={styles.soundItem}
                titleStyle={styles.soundItem}
                subtitleStyle={styles.soundItem}
                onPress={() => this.props.clickVideo(s.sound)}
              />
            ))
          }
        </View>
        <View>
          {!!this.props.soundFile ? 
          <TouchableOpacity
          style={styles.playButton} 
          onPress={() => this.props.playPause()}>
            {this.props.isPaused
              ?
                <Icon
                    size={32}
                    name='play-arrow'
                    type='material'
                    color={colors.white}
                    />
              :
                <Icon
                      size={32}
                      name='pause'
                      type='material'
                      color={colors.white}
                    /> 
              }
          </TouchableOpacity>
          :
          null
          }
        </View>

           {this.props.sleepSound()}

        </View>
    </View>
     
     )
   }

}

AppRegistry.registerComponent('CityNapper', () => NapContainer);

