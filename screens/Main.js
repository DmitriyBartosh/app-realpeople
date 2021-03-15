import React from 'react';
import { ScrollView, View } from 'react-native';

import MainPage from '../components/main/';
import MainNav from '../components/navigation/main';

export const Main = () => {
  return (
      <View>
        <ScrollView>
          <MainPage />
        </ScrollView>
        <MainNav />
      </View>
  );
}

export default Main;