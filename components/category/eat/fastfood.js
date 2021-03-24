import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground} from 'react-native'
import style from './style'
import styleContainer from '../style'

const backImg = require('../../../assets/img/eat/block/fastfood.png')

export const Fastfood = props => {
  return (
        <TouchableHighlight>
          <View style={[styleContainer.containerLong, style.colorFastfood]}>

            <View style={styleContainer.noActive} />
            
            <ImageBackground source={backImg} style={style.fastfood} />
            <View style={styleContainer.containerTitle}>
              <Text style={styleContainer.title} >{props.title}</Text>
              <Text style={styleContainer.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Fastfood;