import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground} from 'react-native'
import style from './style'
import styleContainer from '../style'

const backImg = require('../../../assets/img/cloth/block/shoes.png')

export const Shoes = props => {
  return (
        <TouchableHighlight>
          <View style={[styleContainer.containerLong, style.colorShoes]}>
            <ImageBackground source={backImg} style={style.shoes} />
            <View style={styleContainer.containerTitle}>
              <Text style={styleContainer.title} >{props.title}</Text>
              <Text style={styleContainer.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Shoes;