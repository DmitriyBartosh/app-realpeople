import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground} from 'react-native'
import style from './style'
import styleContainer from '../style'

const backImg = require('../../../assets/img/holidays/block/events.png')

export const Events = props => {
  return (
        <TouchableHighlight>
          <View style={[styleContainer.containerLong, style.colorEvents]}>
            <ImageBackground source={backImg} style={style.events} />
            <View style={styleContainer.containerTitle}>
              <Text style={styleContainer.title} >{props.title}</Text>
              <Text style={styleContainer.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Events;