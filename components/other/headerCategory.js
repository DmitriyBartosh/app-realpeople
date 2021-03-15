import { StyleSheet } from 'react-native'
import React from 'react';
import { Image, Text, View } from 'react-native';

// const iconUrl = require('../../assets/img/main/category/beauty.png')

export const HeaderCategory = props => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subtitle}>{props.subtitle}</Text>
      </View>
      <Image 
         style={styles.icon}
         source={props.iconUrl}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 120,
    padding: 5,
  },
  info: {
    padding: 10,
  }, 
  title: {
    color: 'white',
    fontSize: 22,
    marginBottom: 5,
  },
  subtitle: {
    color: 'white',
  },
  icon:{
    marginRight: 10,
    width: 60,
    height: 60,
    resizeMode: 'contain',
  }
});

export default HeaderCategory;