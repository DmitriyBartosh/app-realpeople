import React from 'react';
import { ScrollView, View } from 'react-native';

import EatCategory from '../../components/category/eat/';
import Header from '../../components/other/headerCategory'
import NavCategory from '../../components/navigation/category'

export const Beauty = () => {
  return (
      <View>
        <ScrollView>
          <Header title='Еда' subtitle='Выберите направление'/>
          <EatCategory />
        </ScrollView>
      <NavCategory />
      </View>
  );
}

export default Beauty;