import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground} from 'react-native'
import style from './style'

const backgroundButton = require('../../assets/img/texture/dirty_old_shirt.png')
const backImg = require('../../assets/img/eat/block/fastfood.png')

export const Fastfood = props => {
  return (
        <TouchableHighlight>
          <View style={[style.containerLong, style.colorFastfood]}>
            <ImageBackground source={backImg} style={style.fastfood} />
            <ImageBackground source={backgroundButton} style={style.background} />
            <View style={style.containerTitle}>
              <Text style={style.title} >{props.title}</Text>
              <Text style={style.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Fastfood;