import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground } from 'react-native'
import { useNavigation  } from '@react-navigation/native';
import style from './style'

const backgroundButton = require('../../assets/img/texture/dirty_old_shirt.png')
const backImg = require('../../assets/img/main/beauty.webp')

export const Beauty = (props) => {
  const navigation = useNavigation(); 
  return (
        <TouchableHighlight onPress={() => navigation.push('Beauty')}>
          <View style={[style.container, style.colorBeauty]}>
            <ImageBackground source={backImg} style={style.beauty} />
            <ImageBackground source={backgroundButton} style={style.background} />
            <View style={style.containerTitle}>
              <Text style={style.title} >{props.title}</Text>
              <Text style={style.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Beauty;