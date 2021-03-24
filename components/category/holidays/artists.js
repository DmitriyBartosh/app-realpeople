import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground} from 'react-native'
import style from './style'
import styleContainer from '../style'

const backImg = require('../../../assets/img/holidays/block/artists.png')

export const Artists = props => {
  return (
        <TouchableHighlight>
          <View style={[styleContainer.containerLong, style.colorArtists]}>
          <View style={styleContainer.noActive} />
            <ImageBackground source={backImg} style={style.artists} />
            <View style={styleContainer.containerTitle}>
              <Text style={styleContainer.title} >{props.title}</Text>
              <Text style={styleContainer.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Artists;