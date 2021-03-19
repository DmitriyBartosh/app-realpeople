import React from 'react'
import { ScrollView, View } from 'react-native'

import ClothCategory from '../../components/category/cloth/'
import Header from '../../components/other/headerCategory'
import NavCategory from '../../components/navigation/category'

export const Cloth = () => {
  return (
      <View>
        <ScrollView>
          <Header title='Одежда' subtitle='Выберите направление'/>
          <ClothCategory />
        </ScrollView>
      <NavCategory />
      </View>
  );
}

export default Cloth;