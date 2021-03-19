import React from 'react'
import {StyleSheet, View } from 'react-native'
import Dj from './DJ'
import Artists from './artists'
import Gift from './gift'
import Photo from './photo'
import Events from './events'

export const Beauty = () => {
  return (
      <View style={style.container}>
        <View style={style.row}>
          <View style={style.col}>
            <Gift title='Подарки' subtitle='Заходи' />
            <Artists title='Артисты' subtitle='Заходи' />
          </View>
          <View style={style.col}>
            <Events title='Организация мероприятий' subtitle='Заходи' />
            <Photo title='Фото/Видео' subtitle='Заходи' />
          </View>
        </View>
        <View style={style.colWide}>
          <Dj title='Ведущие/Диджеи' subtitle='Заходи' />
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