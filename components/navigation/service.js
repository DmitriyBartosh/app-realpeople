import React from 'react'
import { useNavigation  } from '@react-navigation/native';
import { View, StyleSheet, TouchableWithoutFeedback, Text, Image, Dimensions } from 'react-native'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export const mainNav = (props) => {
  const navigation = useNavigation(); 

  return (
    <View style={style.container}>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
      <View style={style.backBtn}>
        <Image
        style={style.backIcon}
        source={require('../../assets/img/icon/back.png')}
        />
      </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <View style={style.category}>
          <Text style={style.categoryText}>{props.categoryName}</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => navigation.popToTop()}>
      <View style={style.buttonReal}>
        <Image
          style={style.realLogo}
          source={require('../../assets/img/logo/logowhite.webp')}
        />
      </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    height: 50,
    zIndex: 10,
  },
  backBtn: {
    width: WIDTH * 0.2,
    paddingLeft: 30,
    alignItems: 'flex-start',
  },
  backIcon: {
    width: 15,
    height: 15,
  },
  category:{
    width: WIDTH * 0.5,
    alignItems: 'center',
  },
  categoryText: {
    color: 'white',
    textAlign: 'center',
  },
  buttonReal:{
    width: WIDTH * 0.2,
    paddingRight: 20,
    alignItems: 'flex-end',
  },
  realLogo: {
    marginTop: 10,
    height: 26,
    width: 50,
  }
})

export default mainNav;