import { useLinkProps } from '@react-navigation/native';
import React from 'react'
import { View, StyleSheet, FlatList, Dimensions, Image } from "react-native";

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const gallery = (props) => {

  return (
  <View style={styles.containerGallery}>
  <FlatList 
    data={props.data}
    numColumns={2}
    renderItem={item => item.key}
    renderItem={({item}) => {
      return <View>
        <Image
         source={item.url} 
         style={styles.galleryImg}/>
      </View>
    }}
  />
  </View>
)}

const styles = StyleSheet.create({
  containerGallery: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  galleryImg: {
    width: (WIDTH * 0.50) - 4,
    margin: 2,
    height: HEIGHT * 0.32,
    borderRadius: 5,
    resizeMode: 'cover',
  },
})

export default gallery;