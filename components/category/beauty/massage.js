import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground} from 'react-native'
import style from './style'
import styleContainer from '../style'

const backImg = require('../../../assets/img/beauty/block/massage.png')

export const Massage = props => {
  return (
        <TouchableHighlight>
          <View style={[styleContainer.container, style.colorMassage]}>
            
            <View style={styleContainer.noActive} />

            <ImageBackground source={backImg} style={style.massage} />
            <View style={styleContainer.containerTitle}>
              <Text style={styleContainer.title} >{props.title}</Text>
              <Text style={styleContainer.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Massage;