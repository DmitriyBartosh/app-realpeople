import React from 'react';
import { ScrollView, View } from 'react-native';

import HouseCategory from '../../components/category/house/';
import Header from '../../components/other/headerCategory'
import NavCategory from '../../components/navigation/category'

export const House = () => {
  return (
      <View>
        <ScrollView>
          <Header title='Дом' subtitle='Выберите направление'/>
          <HouseCategory />
        </ScrollView>
      <NavCategory />
      </View>
  );
}

export default House;