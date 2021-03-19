import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground} from 'react-native'
import { useNavigation  } from '@react-navigation/native'
import style from './style'

const backImg = require('../../assets/img/main/holidays.webp')

export const Holidays = props => {
  const navigation = useNavigation(); 
  return (
        <TouchableHighlight onPress={() => navigation.push('Holidays')}>
          <View style={[style.containerLong, style.colorHolidays]}>
            <ImageBackground source={backImg} style={style.holidays} />
            <View style={style.containerTitle}>
              <Text style={style.title} >{props.title}</Text>
              <Text style={style.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Holidays;