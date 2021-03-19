import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground} from 'react-native'
import style from './style'
import styleContainer from '../style'

const backImg = require('../../../assets/img/holidays/block/DJ.png')

export const Dj = props => {
  return (
        <TouchableHighlight>
          <View style={[styleContainer.container, style.colorDj]}>
            <ImageBackground source={backImg} style={style.dj} />
            <View style={styleContainer.containerTitle}>
              <Text style={styleContainer.title} >{props.title}</Text>
              <Text style={styleContainer.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Dj;