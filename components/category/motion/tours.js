import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground} from 'react-native'
import style from './style'
import styleContainer from '../style'

const backImg = require('../../../assets/img//motion/block/tours.png')

export const Tours = props => {
  return (
        <TouchableHighlight>
          <View style={[styleContainer.container, style.colorTours]}>
            <ImageBackground source={backImg} style={style.tours} />
            <View style={styleContainer.containerTitle}>
              <Text style={styleContainer.title} >{props.title}</Text>
              <Text style={styleContainer.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Tours;