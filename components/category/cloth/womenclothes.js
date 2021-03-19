import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground} from 'react-native'
import style from './style'
import styleContainer from '../style'

const backImg = require('../../../assets/img/cloth/block/womenclothes.png')

export const Womenclothes = props => {
  return (
        <TouchableHighlight>
          <View style={[styleContainer.container, style.colorWomenclothes]}>
            <ImageBackground source={backImg} style={style.womenclothes} />
            <View style={styleContainer.containerTitle}>
              <Text style={styleContainer.title} >{props.title}</Text>
              <Text style={styleContainer.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Womenclothes;