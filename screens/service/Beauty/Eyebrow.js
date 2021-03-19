import React from 'react'
import { View } from 'react-native';
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"

import people from '../../../data/beauty/eyebrow'

import Header from '../../../components/service/header'
import ServiceList from '../../../components/service/listServices'
import NavCategory from '../../../components/navigation/service'

import Details from '../../../components/service/serviceDetail'

const headerImg = require('../../../assets/img/beauty/freelance/eyebrow/background.webp')

function MainScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Брови и ресницы" subtitle="Выберите специалиста" backImg={headerImg}/>
      <ServiceList data={people}/>
      <NavCategory categoryName="Категория | Красота"/>
    </View>
  );
}

const { Navigator, Screen } = createStackNavigator();

const configOpen = {
  animation: 'timing',
  config: {
    duration: 300,
  },
};
const configClose = {
  animation: 'timing',
  config: {
    duration: 300,
  },
};

const ServiceScreen = () => (
  <Navigator 
    headerMode="none"
    mode="modal"
    screenOptions={({route}) => {
      return {
        gestureDirection: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.FadeFromBottomAndroid,
      }
    }}
    >
    <Screen 
    name="MainScreen" 
    component={MainScreen} 
    options={{
      transitionSpec: {
        open: configOpen,
        close: configClose,
      }
    }}
    />
    <Screen 
    name="Details" 
    component={Details} 
    options={navigation => ({
      cardStyleInterpolator: ({current: {progress}}) => {
        return { 
          cardStyle: {
            opacity: progress
          }
        }
      },
      transitionSpec: {
        open: configOpen,
        close: configClose,
      },
    })
  }
    />
  </Navigator>
);

const eyebrow = () => {
  return (
      <ServiceScreen />
  );
}


export default eyebrow;