import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground} from 'react-native'
import { useNavigation  } from '@react-navigation/native'
import style from './style'
import styleContainer from '../style'

const backImg = require('../../../assets/img/beauty/block/eyelashes.png')

export const Eyelashes = props => {
  const navigation = useNavigation(); 
  return (
        <TouchableHighlight onPress={() => navigation.push('Eyebrow')}>
          <View style={[styleContainer.container, style.colorEyelashes]}>
            <ImageBackground source={backImg} style={style.eyelashes} />
            <View style={styleContainer.containerTitle}>
              <Text style={styleContainer.title} >{props.title}</Text>
              <Text style={styleContainer.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Eyelashes;