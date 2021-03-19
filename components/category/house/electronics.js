import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground} from 'react-native'
import style from './style'
import styleContainer from '../style'

const backImg = require('../../../assets/img/house/block/electronics.png')

export const Electronics = props => {
  return (
        <TouchableHighlight>
          <View style={[styleContainer.container, style.colorElectronics]}>
            <ImageBackground source={backImg} style={style.electronics} />
            <View style={styleContainer.containerTitle}>
              <Text style={styleContainer.title} >{props.title}</Text>
              <Text style={styleContainer.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Electronics;