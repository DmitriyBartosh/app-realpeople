import React from 'react'
import {TouchableWithoutFeedback, Text, View, ImageBackground} from 'react-native'
import style from './style'

const backgroundButton = require('../../../assets/img/texture/dirty_old_shirt.png')
const backImg = require('../../../assets/img/main/eat.webp')

export const Eat = props => {
  return (
        <TouchableWithoutFeedback>
          <View style={[style.containerLong, style.colorEat]}>
            <ImageBackground source={backImg} style={style.eat} />
            <ImageBackground source={backgroundButton} style={style.background} />
            <View style={style.containerTitle}>
              <Text style={style.title} >{props.title}</Text>
              <Text style={style.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
  )
}

export default Eat;