import React from 'react';
import { ScrollView, View } from 'react-native';

import AutoCategory from '../../components/category/auto';
import Header from '../../components/other/headerCategory'
import NavCategory from '../../components/navigation/category'

export const Auto = () => {
  return (
      <View>
        <ScrollView>
          <Header title='Авто' subtitle='Выберите направление'/>
          <AutoCategory />
        </ScrollView>
      <NavCategory />
      </View>
  );
}

export default Auto;