import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground} from 'react-native'
import { useNavigation  } from '@react-navigation/native';
import style from './style'

const backImg = require('../../assets/img/main/eat.webp')

export const Eat = props => {
  const navigation = useNavigation(); 
  return (
        <TouchableHighlight onPress={() => navigation.push('Eat')}>
          <View style={[style.containerLong, style.colorEat]}>
            <ImageBackground source={backImg} style={style.eat} />
            <View style={style.containerTitle}>
              <Text style={style.title} >{props.title}</Text>
              <Text style={style.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Eat;