import React from 'react'
import { useNavigation  } from '@react-navigation/native';
import { View, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native'

export const NavCategory = () => {
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
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 60,
  },
  backBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(50,50,50, 0.4)',
    marginLeft: 15,
    borderRadius: 30,
    width: 50,
    height: '80%',
  },
  backIcon: {
    width: 15,
    height: 15,
  }
})

export default NavCategory;