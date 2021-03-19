import React from 'react';
import { ScrollView, View } from 'react-native';

import BeautyCategory from '../../components/category/beauty';
import Header from '../../components/other/headerCategory'
import NavCategory from '../../components/navigation/category'

export const Beauty = () => {
  return (
      <View>
        <ScrollView>
          <Header title='Красота' subtitle='Выберите направление' />
          <BeautyCategory />
        </ScrollView>
      <NavCategory />
      </View>
  );
}

export default Beauty;