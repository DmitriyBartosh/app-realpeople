import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground} from 'react-native'
import style from './style'
import styleContainer from '../style'

const backImg = require('../../../assets/img/auto/block/audio.png')

export const Audio = props => {
  return (
        <TouchableHighlight>
          <View style={[styleContainer.container, style.colorAudio]}>
            <ImageBackground source={backImg} style={style.audio} />
            <View style={styleContainer.containerTitle}>
              <Text style={styleContainer.title} >{props.title}</Text>
              <Text style={styleContainer.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Audio;