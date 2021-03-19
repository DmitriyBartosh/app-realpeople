import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground} from 'react-native'
import style from './style'
import styleContainer from '../style'

const backImg = require('../../../assets/img/house/block/cleaning.png')

export const Cleaning = props => {
  return (
        <TouchableHighlight>
          <View style={[styleContainer.containerLong, style.colorCleaning]}>
            <ImageBackground source={backImg} style={style.cleaning} />
            <View style={styleContainer.containerTitle}>
              <Text style={styleContainer.title} >{props.title}</Text>
              <Text style={styleContainer.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Cleaning;