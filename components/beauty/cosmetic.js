import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground} from 'react-native'
import style from './style'

const backgroundButton = require('../../assets/img/texture/dirty_old_shirt.png')
const backImg = require('../../assets/img/beauty/block/cosmetic.png')

export const Cosmetic = props => {
  return (
        <TouchableHighlight>
          <View style={[style.containerLong, style.colorCosmetic]}>
            <ImageBackground source={backImg} style={style.cosmetic} />
            <ImageBackground source={backgroundButton} style={style.background} />
            <View style={style.containerTitle}>
              <Text style={style.title} >{props.title}</Text>
              <Text style={style.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Cosmetic;