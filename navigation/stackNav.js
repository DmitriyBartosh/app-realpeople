import React from "react";
import { Easing, StatusBar } from "react-native"
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import Main from "../screens/Main";
import Beauty from "../screens/Beauty";
import Eat from "../screens/Eat";
import Cloth from "../screens/Cloth";

const { Navigator, Screen } = createStackNavigator();

const configOpen = {
  animation: 'timing',
  config: {
    duration: 600,
    easing: Easing.out(Easing.exp),
  },
};
const configClose = {
  animation: 'timing',
  config: {
    duration: 1000,
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
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer theme={DarkTheme}>
    <StatusBar backgroundColor="black" color="white"/>
    <MainNavigator />
  </NavigationContainer>
);