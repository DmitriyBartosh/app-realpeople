import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground} from 'react-native'
import { useNavigation  } from '@react-navigation/native'
import style from './style'
import styleContainer from '../style'

const backImg = require('../../../assets/img/eat/block/sweets.png')

export const Sweets = props => {
  const navigation = useNavigation(); 
  return (
        <TouchableHighlight onPress={() => navigation.push('Dessert')}>
          <View style={[styleContainer.container, style.colorSweets]}>
            <ImageBackground source={backImg} style={style.sweets} />
            <View style={styleContainer.containerTitle}>
              <Text style={styleContainer.title} >{props.title}</Text>
              <Text style={styleContainer.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Sweets;