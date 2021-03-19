import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground} from 'react-native'
import style from './style'
import styleContainer from '../style'

const backImg = require('../../../assets/img/holidays/block/gift.png')

export const Gift = props => {
  return (
        <TouchableHighlight>
          <View style={[styleContainer.container, style.colorGift]}>
            <ImageBackground source={backImg} style={style.gift} />
            <View style={styleContainer.containerTitle}>
              <Text style={styleContainer.title} >{props.title}</Text>
              <Text style={styleContainer.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Gift;