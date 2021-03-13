import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView,  } from 'react-native';

import MainCategory from './components/MainCategory/category/MainCategory';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <MainCategory />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    padding: 5,
    backgroundColor: '#FFF',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'black'
  }
});
