import React from 'react';
import { ScrollView, View } from 'react-native';

import BeautyCategory from '../components/beauty/';
import Header from '../components/other/headerCategory'
import NavCategory from '../components/navigation/category'

const iconUrl = require('../assets/img/main/category/beauty.png')

export const Beauty = () => {
  return (
      <View>
        <ScrollView>
          <Header title='Красота' subtitle='Работает' iconUrl={iconUrl}/>
          <BeautyCategory />
        </ScrollView>
      <NavCategory />
      </View>
  );
}

export default Beauty;