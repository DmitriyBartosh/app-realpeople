import React from 'react';
import { ScrollView, View } from 'react-native';

import EducationCategory from '../../components/category/education/';
import Header from '../../components/other/headerCategory'
import NavCategory from '../../components/navigation/category'

export const Education = () => {
  return (
      <View>
        <ScrollView>
          <Header title='Обучение' subtitle='Выберите направление'/>
          <EducationCategory />
        </ScrollView>
      <NavCategory />
      </View>
  );
}

export default Education;