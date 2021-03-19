import React from 'react'
import {StyleSheet, View } from 'react-native'
import Ceilings from './ceilings'
import Cleaning from './cleaning'
import Interior from './interior'
import Electronics from './electronics'
import Repairs from './repairs'

export const Auto = () => {
  return (
      <View style={style.container}>
        <View style={style.row}>
          <View style={style.col}>
            <Repairs title='Ремонт' subtitle='Заходи' />
            <Interior title='Интерьер' subtitle='Заходи' />
          </View>
          <View style={style.col}>
            <Cleaning title='Уборка' subtitle='Заходи' />
            <Electronics title='Умный дом' subtitle='Заходи' />
          </View>
        </View>
        <View style={style.colWide}>
          <Ceilings title='Потолки' subtitle='Заходи' />
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