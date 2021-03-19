import React from 'react'
import {TouchableHighlight, Text, View, ImageBackground} from 'react-native'
import style from './style'
import styleContainer from '../style'

const backImg = require('../../../assets/img/training/block/courses.png')

export const Courses = props => {
  return (
        <TouchableHighlight>
          <View style={[styleContainer.containerLong, style.colorCourses]}>
            <ImageBackground source={backImg} style={style.courses} />
            <View style={styleContainer.containerTitle}>
              <Text style={styleContainer.title} >{props.title}</Text>
              <Text style={styleContainer.subtitle} >{props.subtitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
  )
}

export default Courses;