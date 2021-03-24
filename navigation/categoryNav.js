import React from "react";
import { Easing, StatusBar } from "react-native"
import { NavigationContainer, DarkTheme } from "@react-navigation/native"
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"

import Main from "../screens/Main"
import Beauty from "../screens/category/Beauty"
import Eat from "../screens/category/Eat"
import Cloth from "../screens/category/Cloth"
import Auto from "../screens/category/Auto"
import House from "../screens/category/House"
import Education from "../screens/category/Education"
import Holidays from "../screens/category/Holidays"
import Motion from "../screens/category/Motion"

import Makeup from "../screens/service/Beauty/Makeup"
import Eyebrow from "../screens/service/Beauty/Eyebrow"
import Manicure from "../screens/service/Beauty/Manicure"

import Catering from "../screens/service/Eat/Catering"
import Dessert from "../screens/service/Eat/Dessert"

import Dj from "../screens/service/Holidays/Dj"
import Events from "../screens/service/Holidays/Events"
import Gift from "../screens/service/Holidays/Gift"
import Photo from "../screens/service/Holidays/Photo"
 
const { Navigator, Screen } = createStackNavigator();

const configOpen = {
  animation: 'timing',
  config: {
    duration: 300,
    easing: Easing.out(Easing.exp),
  },
};
const configClose = {
  animation: 'timing',
  config: {
    duration: 600,
    easing: Easing.out(Easing.exp),
  },
};

const MainNavigator = () => (
  <Navigator 
    headerMode="none"
    screenOptions={({route}) => {
      return {
        gestureDirection: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      }
    }}
    >
    <Screen 
    name="Main" 
    component={Main} 
    options={{
      transitionSpec: {
        open: configOpen,
        close: configClose,
      }
    }}
    />
    <Screen 
    name="Beauty" 
    component={Beauty}
    options={{
      transitionSpec: {
        open: configOpen,
        close: configClose,
      }
    }}
    />
    <Screen 
    name="Eat" 
    component={Eat}
    options={{
      transitionSpec: {
        open: configOpen,
        close: configClose,
      }
    }}
    />
    <Screen 
    name="Cloth" 
    component={Cloth}
    options={{
      transitionSpec: {
        open: configOpen,
        close: configClose,
      }
    }}
    />
    <Screen 
    name="Auto" 
    component={Auto}
    options={{
      transitionSpec: {
        open: configOpen,
        close: configClose,
      }
    }}
    />
    <Screen 
    name="House" 
    component={House}
    options={{
      transitionSpec: {
        open: configOpen,
        close: configClose,
      }
    }}
    />
    <Screen 
    name="Education" 
    component={Education}
    options={{
      transitionSpec: {
        open: configOpen,
        close: configClose,
      }
    }}
    />
    <Screen 
    name="Holidays" 
    component={Holidays}
    options={{
      transitionSpec: {
        open: configOpen,
        close: configClose,
      }
    }}
    />
    <Screen 
    name="Motion" 
    component={Motion}
    options={{
      transitionSpec: {
        open: configOpen,
        close: configClose,
      }
    }}
    />
    <Screen 
    name="Makeup" 
    component={Makeup}
    options={{
      transitionSpec: {
        open: configOpen,
        close: configClose,
      }
    }}
    />
    <Screen 
    name="Eyebrow" 
    component={Eyebrow}
    options={{
      transitionSpec: {
        open: configOpen,
        close: configClose,
      }
    }}
    />
    <Screen 
    name="Manicure" 
    component={Manicure}
    options={{
      transitionSpec: {
        open: configOpen,
        close: configClose,
      }
    }}
    />
    <Screen 
    name="Catering" 
    component={Catering}
    options={{
      transitionSpec: {
        open: configOpen,
        close: configClose,
      }
    }}
    />
    <Screen 
    name="Dessert" 
    component={Dessert}
    options={{
      transitionSpec: {
        open: configOpen,
        close: configClose,
      }
    }}
    />
    <Screen 
    name="Dj" 
    component={Dj}
    options={{
      transitionSpec: {
        open: configOpen,
        close: configClose,
      }
    }}
    />
    <Screen 
    name="Events" 
    component={Events}
    options={{
      transitionSpec: {
        open: configOpen,
        close: configClose,
      }
    }}
    />
    <Screen 
    name="Photo" 
    component={Photo}
    options={{
      transitionSpec: {
        open: configOpen,
        close: configClose,
      }
    }}
    />
    <Screen 
    name="Gift" 
    component={Gift}
    options={{
      transitionSpec: {
        open: configOpen,
        close: configClose,
      }
    }}
    />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer theme={DarkTheme}>
    <StatusBar backgroundColor="black" color="white"/>
    <MainNavigator />
  </NavigationContainer>
);