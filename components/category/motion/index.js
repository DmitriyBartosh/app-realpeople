import React from 'react'
import {StyleSheet, View } from 'react-native'
import Activity from './activity'
import Relaxation from './relaxation'
import Sport from './sport'
import Sportinggoods from './sportinggoods'
import Tours from './tours'

export const Auto = () => {
  return (
      <View style={style.container}>
        <View style={style.row}>
          <View style={style.col}>
            <Sport title='Спорт' subtitle='Заходи' />
            <Activity title='Мероприятия' subtitle='Заходи' />
          </View>
          <View style={style.col}>
            <Relaxation title='Отдых' subtitle='Заходи' />
            <Tours title='Туры' subtitle='Заходи' />
          </View>
        </View>
        <View style={style.colWide}>
          <Sportinggoods title='Спортиные товары' subtitle='Заходи' />
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