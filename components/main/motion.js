import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground} from 'react-native'
import { useNavigation  } from '@react-navigation/native'
import style from './style'

const backImg = require('../../assets/img/main/motion.webp')

export const Motion = props => {
  const navigation = useNavigation(); 
  return (
        <TouchableHighlight onPress={() => navigation.push('Motion')}>
          <View style={[style.container, style.colorMotion]}>
            <ImageBackground source={backImg} style={style.motion} />
            <View style={style.containerTitle}>
              <Text style={style.title} >{props.title}</Text>
              <Text style={style.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Motion;