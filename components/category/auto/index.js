import React from 'react'
import {StyleSheet, View } from 'react-native'
import Audio from './audio'
import Drycleaning from './drycleaning'
import Rent from './rent'
import Repairs from './repairs'
import Service from './service'

export const Auto = () => {
  return (
      <View style={style.container}>
        <View style={style.row}>
          <View style={style.col}>
            <Repairs title='Ремонт' subtitle='Заходи' />
            <Rent title='Аренда' subtitle='Заходи' />
          </View>
          <View style={style.col}>
            <Service title='Обслуживание' subtitle='Заходи' />
            <Drycleaning title='Химчистка' subtitle='Заходи' />
          </View>
        </View>
        <View style={style.colWide}>
          <Audio title='Установка аудиосистемы' subtitle='Заходи' />
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

export default Auto;