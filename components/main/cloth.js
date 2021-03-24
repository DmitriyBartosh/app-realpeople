import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground} from 'react-native'
import { useNavigation  } from '@react-navigation/native'
import style from './style'

const backImg = require('../../assets/img/main/clothes.webp')

export const Cloth = props => {
  const navigation = useNavigation(); 
  return (
        <TouchableHighlight onPress={() => navigation.push('Cloth')}>
          <View style={[style.container, style.colorCloth]}>
          <View style={style.noActive} />
            <ImageBackground source={backImg} style={style.cloth} />
            <View style={style.containerTitle}>
              <Text style={style.title} >{props.title}</Text>
              <Text style={style.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Cloth;