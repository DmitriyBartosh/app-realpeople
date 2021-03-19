import React from 'react';
import { ScrollView, View } from 'react-native';

import MotionCategory from '../../components/category/motion';
import Header from '../../components/other/headerCategory'
import NavCategory from '../../components/navigation/category'

export const Motion = () => {
  return (
      <View>
        <ScrollView>
          <Header title='Движение' subtitle='Выберите направление'/>
          <MotionCategory />
        </ScrollView>
      <NavCategory />
      </View>
  );
}

export default Motion;