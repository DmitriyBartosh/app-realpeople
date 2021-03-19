import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground} from 'react-native'
import style from './style'
import styleContainer from '../style'

const backImg = require('../../../assets/img/eat/block/burgers.png')

export const Burgers = props => {
  return (
        <TouchableHighlight>
          <View style={[styleContainer.container, style.colorBurgers]}>
            <ImageBackground source={backImg} style={style.burgers} />
            <View style={styleContainer.containerTitle}>
              <Text style={styleContainer.title} >{props.title}</Text>
              <Text style={styleContainer.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Burgers;