import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Nav from '../../components/navigation/category'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;



const serviceDetail = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>

        <View style={styles.avatarContainer}>
          <LinearGradient colors={['#ffe4e4', '#ca49fd']} style={styles.avatarBorder}/>
          <View style={styles.avatarHidden}/>
          <Image source={item.avatar} style={styles.avatar}/>
        </View>

        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.desc}>{item.description}</Text>
        </View>

      </View>

      <View style={styles.containerContact}>

      </View>

      <View style={styles.containerGallery}>
      <FlatList 
        data={item.story}
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
    <Nav/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 76,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 30,
  },
  avatarBorder:{
    position: 'absolute',
    top: 0,
    left: 0,
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  avatarHidden: {
    position: 'absolute',
    top: 1,
    left: 1,
    height: 68,
    width: 68,
    backgroundColor: 'black',
    borderRadius: 33,
  },
  avatar:{
    height: 64,
    width: 64,
    top: 3,
    left: 3,
    borderRadius: 40,
    marginRight: 25,
    zIndex: 10,
  },
  info: {
    flex: 1,
    paddingRight: 20,
    paddingTop: 10,
  },
  name: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  desc: {
    color: 'white',
    fontSize: 12,
    opacity: 0.75,
  },
  infoContainer: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  containerGallery: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
  },
  galleryImg: {
    width: (WIDTH * 0.50) - 10,
    margin: 5,
    height: HEIGHT * 0.32,
    borderRadius: 5,
    resizeMode: 'cover',
  },
})

serviceDetail.sharedElements = (route, otherRoute, showing) => {
  const {item} = route.params;
  return [
    {id: `item.${item.id}.avatar`},
    {id: `item.${item.id}.info`, animation: 'fade'},
  ]
};

export default serviceDetail;