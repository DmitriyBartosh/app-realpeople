import React from 'react'
import {StyleSheet, View } from 'react-native'
import Beauty from './beauty'
import Eat from './eat'
import Auto from './auto'
import Home from './home'
import Cloth from './cloth'
import Holidays from './holidays'
import Education from './education'
import Motion from './motion'

export const MainCategory = () => {
  return (
      <View style={style.container}>
        <View style={style.row}>
          <View style={style.col}>
            <Beauty title='Красота' subtitle='Заходи' />
            <Auto title='Авто' subtitle='Заходи' />
          </View>
          <View style={style.col}>
            <Eat title='Еда' subtitle='Заходи' />
          </View>
        </View>
        <View style={style.colWide}>
          <Home title='Дом' subtitle='Заходи' />
        </View>
        <View style={style.row}>
          <View style={style.col}>
            <Cloth title='Одежда' subtitle='Заходи' />
            <Holidays title='Праздники' subtitle='Заходи' />
          </View>
          <View style={style.col}>
            <Education title='Обучение' subtitle='Заходи' />
            <Motion title='Движение' subtitle='Заходи' />
          </View>
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

export default MainCategory;