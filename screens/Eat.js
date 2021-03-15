import React from 'react';
import { ScrollView, View } from 'react-native';

import EatCategory from '../components/eat/';
import Header from '../components/other/headerCategory'
import NavCategory from '../components/navigation/category'

const iconUrl = require('../assets/img/main/category/eat.png')

export const Beauty = () => {
  return (
      <View>
        <ScrollView>
          <Header title='Еда' subtitle='Работает' iconUrl={iconUrl}/>
          <EatCategory />
        </ScrollView>
      <NavCategory />
      </View>
  );
}

export default Beauty;