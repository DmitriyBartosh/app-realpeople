import React from 'react'
import {StyleSheet, View } from 'react-native'
import Cosmetic from './cosmetic'
import Eyelashes from './eyelashes'
import Manicure from './manicure'
import Massage from './massage'
import Makeup from './makeup'

export const Beauty = () => {
  return (
      <View style={style.container}>
        <View style={style.row}>
          <View style={style.col}>
            <Manicure title='Маникюр' subtitle='Заходи' />
            <Cosmetic title='Косметика' subtitle='Заходи' />
          </View>
          <View style={style.col}>
            <Makeup title='Макияж/Прически' subtitle='Заходи' />
            <Eyelashes title='Брови/Ресницы' subtitle='Заходи' />
          </View>
        </View>
        <View style={style.colWide}>
          <Massage title='Массаж' subtitle='Заходи' />
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

export default Beauty;