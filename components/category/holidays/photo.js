import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground} from 'react-native'
import { useNavigation  } from '@react-navigation/native'
import style from './style'
import styleContainer from '../style'

const backImg = require('../../../assets/img/holidays/block/photo.png')

export const Photo = props => {
  const navigation = useNavigation(); 
  return (
        <TouchableHighlight onPress={() => navigation.push('Photo')}>
          <View style={[styleContainer.container, style.colorPhoto]}>
            <ImageBackground source={backImg} style={style.photo} />
            <View style={styleContainer.containerTitle}>
              <Text style={styleContainer.title} >{props.title}</Text>
              <Text style={styleContainer.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Photo;