import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground} from 'react-native'
import style from './style'
import styleContainer from '../style'

const backImg = require('../../../assets/img/cloth/block/accessories.png')

export const Accessories = props => {
  return (
        <TouchableHighlight>
          <View style={[styleContainer.container, style.colorAccessories]}>
            <ImageBackground source={backImg} style={style.accessories} />
            <View style={styleContainer.containerTitle}>
              <Text style={styleContainer.title} >{props.title}</Text>
              <Text style={styleContainer.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Accessories;