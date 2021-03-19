import { StyleSheet } from 'react-native'
import React from 'react';
import { Image, Text, View } from 'react-native';

export const HeaderCategory = props => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subtitle}>{props.subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
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
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 5,
  },
  subtitle: {
    color: 'white',
    textAlign: 'center',
  },
  icon:{
    marginRight: 10,
    width: 60,
    height: 60,
    resizeMode: 'contain',
  }
});

export default HeaderCategory;