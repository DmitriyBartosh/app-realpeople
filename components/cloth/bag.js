import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground} from 'react-native'
import style from './style'

const backgroundButton = require('../../assets/img/texture/dirty_old_shirt.png')
const backImg = require('../../assets/img/cloth/block/bag.png')

export const Bag = props => {
  return (
        <TouchableHighlight>
          <View style={[style.container, style.colorBag]}>
            <ImageBackground source={backImg} style={style.bag} />
            <ImageBackground source={backgroundButton} style={style.background} />
            <View style={style.containerTitle}>
              <Text style={style.title} >{props.title}</Text>
              <Text style={style.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Bag;