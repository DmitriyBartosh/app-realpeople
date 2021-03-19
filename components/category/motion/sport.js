import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground} from 'react-native'
import style from './style'
import styleContainer from '../style'

const backImg = require('../../../assets/img/motion/block/sport.png')

export const Sport = props => {
  return (
        <TouchableHighlight>
          <View style={[styleContainer.container, style.colorSport]}>
            <ImageBackground source={backImg} style={style.sport} />
            <View style={styleContainer.containerTitle}>
              <Text style={styleContainer.title} >{props.title}</Text>
              <Text style={styleContainer.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Sport;