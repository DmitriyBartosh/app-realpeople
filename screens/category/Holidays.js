import React from 'react';
import { ScrollView, View } from 'react-native';

import HolidaysCategory from '../../components/category/holidays/';
import Header from '../../components/other/headerCategory'
import NavCategory from '../../components/navigation/category'

export const Holidays = () => {
  return (
      <View>
        <ScrollView>
          <Header title='Праздники' subtitle='Выберите направление'/>
          <HolidaysCategory />
        </ScrollView>
      <NavCategory />
      </View>
  );
}

export default Holidays;