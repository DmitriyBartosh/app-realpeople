import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground} from 'react-native'
import style from './style'
import styleContainer from '../style'

const backImg = require('../../../assets/img/beauty/block/cosmetic.png')

export const Cosmetic = props => {
  return (
        <TouchableHighlight>
          <View style={[styleContainer.containerLong, style.colorCosmetic]}>
            <ImageBackground source={backImg} style={style.cosmetic} />
            <View style={styleContainer.containerTitle}>
              <Text style={styleContainer.title} >{props.title}</Text>
              <Text style={styleContainer.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Cosmetic;