import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground} from 'react-native'
import { useNavigation  } from '@react-navigation/native'
import style from './style'
import styleContainer from '../style'

const backImg = require('../../../assets/img/beauty/block/makeup.png')

export const Makeup = props => {
  const navigation = useNavigation(); 
  return (
        <TouchableHighlight onPress={() => navigation.push('Makeup')}>
          <View style={[styleContainer.containerLong, style.colorMakeup]}>
            <ImageBackground source={backImg} style={style.makeup} />
            <View style={styleContainer.containerTitle}>
              <Text style={styleContainer.title} >{props.title}</Text>
              <Text style={styleContainer.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Makeup;