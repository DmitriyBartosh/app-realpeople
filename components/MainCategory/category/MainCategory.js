import React from 'react'
import {StyleSheet, View } from 'react-native'
import Beauty from '../buttons/beauty'
import Eat from '../buttons/eat'
import Auto from '../buttons/auto'
import Home from '../buttons/home'
import Cloth from '../buttons/cloth'
import Holidays from '../buttons/holidays'
import Education from '../buttons/education'
import Motion from '../buttons/motion'

export const MainCategory = () => {
  return (
      <View style={style.container}>
        <View style={style.row}>
          <View style={style.col}>
            <Beauty title='Красота' subtitle='Заходи' />
            <Auto title='Авто' subtitle='Заходи' />
          </View>
          <View style={style.col}>
            <Eat title='Едаа' subtitle='Заходи' />
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
    alignItems: 'flex-start'
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