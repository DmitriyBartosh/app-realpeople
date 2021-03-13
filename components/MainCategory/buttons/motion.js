import React from 'react'
import {TouchableWithoutFeedback, Text, View, ImageBackground} from 'react-native'
import style from './style'

const backgroundButton = require('../../../assets/img/texture/dirty_old_shirt.png')
const backImg = require('../../../assets/img/main/motion.webp')

export const Motion = props => {
  return (
        <TouchableWithoutFeedback>
          <View style={[style.container, style.colorMotion]}>
            <ImageBackground source={backImg} style={style.motion} />
            <ImageBackground source={backgroundButton} style={style.background} />
            <View style={style.containerTitle}>
              <Text style={style.title} >{props.title}</Text>
              <Text style={style.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
  )
}

export default Motion;