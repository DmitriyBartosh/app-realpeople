import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground} from 'react-native'
import style from './style'
import styleContainer from '../style'

const backImg = require('../../../assets/img/house/block/ceilings.png')

export const Ceilings = props => {
  return (
        <TouchableHighlight>
          <View style={[styleContainer.container, style.colorCeilings]}>
            <ImageBackground source={backImg} style={style.ceilings} />
            <View style={styleContainer.containerTitle}>
              <Text style={styleContainer.title} >{props.title}</Text>
              <Text style={styleContainer.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Ceilings;