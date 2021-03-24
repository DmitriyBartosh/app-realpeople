import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Contact from './contact'
import Gallery from './gallery'
import Price from './price'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Tab = createBottomTabNavigator();

const serviceDetail = ({navigation, route, props}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
    <TouchableWithoutFeedback onPress={() => {navigation.navigate('MainScreen')}}>
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

        <View>
          <Ionicons style={styles.closeIcon} name='close' size={25}/>
        </View>
      </View>
    </TouchableWithoutFeedback>

      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Story') {
              iconName = focused ? 'image' : 'image-outline'
            }
            else if (route.name === 'Contact') {
              iconName = focused ? 'link' : 'link-outline';
            }
            else if (route.name === 'Price') {
              iconName = focused ? 'pricetags' : 'pricetags-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}
        backBehavior='initialRoute'
        tabBarOptions={{
          activeTintColor: 'rgb(255,228,228)',
          inactiveTintColor: 'rgba(255,228,228, 0.5)',
          showLabel: false,
          style: {backgroundColor: 'transparent', height: 50, width: WIDTH},
          inactiveBackgroundColor: 'transparent',
          activeBackgroundColor: 'rgba(202,73,253, 0.5)',
          tabStyle: { borderRadius: 10, margin: 8}
        }}
      >
        <Tab.Screen name="Story" children={() => <Gallery data={item.story}/>}/>
        <Tab.Screen name="Contact" children={() => <Contact data={item.links}/>}/>
        <Tab.Screen name="Price" children={() => <Price data={item.price}/>}/>
      </Tab.Navigator>

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
    height: 70,
    width: WIDTH - 20,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 15,
    borderTopLeftRadius: 45,
    borderBottomLeftRadius: 45,
    marginBottom: 15,
    marginTop: 15,
  },
  avatarContainer: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 25,
  },
  avatarBorder:{
    position: 'absolute',
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  avatarHidden: {
    position: 'absolute',
    height: 68,
    width: 68,
    backgroundColor: 'black',
    borderRadius: 34,
  },
  avatar:{
    position: 'absolute',
    height: 66,
    width: 66,
    borderRadius: 33,
    marginRight: 25,
    zIndex: 10,
  },
  info: {
    flex: 1,
    paddingRight: 20,
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
  closeIcon: {
    color: 'white',
    marginRight: 15,
  }
})

export default serviceDetail;