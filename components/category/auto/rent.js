import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground} from 'react-native'
import style from './style'
import styleContainer from '../style'

const backImg = require('../../../assets/img/auto/block/rent.png')

export const Rent = props => {
  return (
        <TouchableHighlight>
          <View style={[styleContainer.containerLong, style.colorRent]}>
            <ImageBackground source={backImg} style={style.rent} />
            <View style={styleContainer.containerTitle}>
              <Text style={styleContainer.title} >{props.title}</Text>
              <Text style={styleContainer.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Rent;