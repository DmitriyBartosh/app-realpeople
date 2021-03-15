import React from 'react'
import {StyleSheet, View } from 'react-native'
import Bag from './bag'
import Clothes from './clothes'
import Shoes from './shoes'
import Womenclothes from './womenclothes'
import Accessories from './accessories'

export const Eat = () => {
  return (
      <View style={style.container}>
        <View style={style.row}>
          <View style={style.col}>
            <Accessories title='Аксессуары' subtitle='Заходи' />
            <Shoes title='Обувь' subtitle='Усадьба холл' />
          </View>
          <View style={style.col}>
            <Clothes title='Одежда' subtitle='Заходи' />
            <Bag title='Сумки' subtitle='Заходи' />
          </View>
        </View>
        <View style={style.colWide}>
          <Womenclothes title='Женская одежда' subtitle='Заходи' />
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

export default Eat;