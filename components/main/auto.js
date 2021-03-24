import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground} from 'react-native'
import { useNavigation  } from '@react-navigation/native';
import style from './style'

const backImg = require('../../assets/img/main/auto.webp')

export const Auto = props => {
  const navigation = useNavigation(); 
  return (
        <TouchableHighlight onPress={() => navigation.push('Auto')}>
          <View style={[style.container, style.colorAuto]}>
          <View style={style.noActive} />
            <ImageBackground source={backImg} style={style.auto} />
            <View style={style.containerTitle}>
              <Text style={style.title} >{props.title}</Text>
              <Text style={style.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Auto;