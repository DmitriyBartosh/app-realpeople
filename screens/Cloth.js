import React from 'react'
import { ScrollView, View } from 'react-native'

import ClothCategory from '../components/cloth/'
import Header from '../components/other/headerCategory'
import NavCategory from '../components/navigation/category'

const iconUrl = require('../assets/img/main/category/clothes.png')

export const Cloth = () => {
  return (
      <View>
        <ScrollView>
          <Header title='Одежда' subtitle='Работает' iconUrl={iconUrl}/>
          <ClothCategory />
        </ScrollView>
      <NavCategory />
      </View>
  );
}

export default Cloth;