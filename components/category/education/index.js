import React from 'react'
import { StyleSheet, View } from 'react-native'
import Browistcourses from './browistcourses'
import Courses from './courses'
import Selfdevelopment from './selfdevelopment'
import Tutor from './tutor'
import Childreneducation from './сhildreneducation'

export const Education = () => {
  return (
      <View style={style.container}>
        <View style={style.row}>
          <View style={style.col}>
            <Tutor title='Репетиторы' subtitle='Заходи' />
            <Childreneducation title='Детям' subtitle='Усадьба холл' />
          </View>
          <View style={style.col}>
            <Courses title='Курсы' subtitle='Заходи' />
            <Selfdevelopment title='Саморазвитие' subtitle='Заходи' />
          </View>
        </View>
        <View style={style.colWide}>
          <Browistcourses title='Курсы бровиста' subtitle='Заходи' />
        </View>
      </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingBottom: 50,
    paddingTop: 10,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  col: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    width: '50%',
  },
  colWide: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    paddingLeft: 5,
    paddingRight: 5,
  }
})

export default Education;