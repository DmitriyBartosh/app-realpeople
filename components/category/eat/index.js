import React from 'react'
import {StyleSheet, View } from 'react-native'
import Burgers from './burgers'
import Catering from './catering'
import Products from './products'
import Sweets from './sweets'
import Fastfood from './fastfood'

export const Eat = () => {
  return (
      <View style={style.container}>
        <View style={style.row}>
          <View style={style.col}>
            <Products title='Продукты' subtitle='Заходи' />
            <Catering title='Кейтеринг' subtitle='Усадьба холл' />
          </View>
          <View style={style.col}>
            <Fastfood title='Готовая еда' subtitle='Заходи' />
            <Sweets title='Сладости' subtitle='Заходи' />
          </View>
        </View>
        <View style={style.colWide}>
          <Burgers title='Бургеры' subtitle='Заходи' />
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