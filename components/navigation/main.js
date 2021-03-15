import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, Text, Image } from 'react-native'

export const mainNav = () => {
  return (
    <View style={style.container}>
      <TouchableWithoutFeedback style={style.contactBtn}>
        <Image
        style={style.contactIcon}
        source={require('../../assets/img/icon/mail.png')}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback style={style.listBtn}>
        <View style={style.containerBtn}>
          <Image
            style={style.listIcon}
            source={require('../../assets/img/icon/list.png')}
          />
          <Text style={style.listText}>Список</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback style={style.buttonReal}>
        <Image
          style={style.realLogo}
          source={require('../../assets/img/logo/logowhite.webp')}
        />
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
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: 50,
  },
  contactIcon: {
    width: 20,
    height: 20,
  },
  containerBtn:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  listIcon: {
    width: 15,
    height: 15,
    marginRight: 10,
    marginLeft: 20,
  },
  listText: {
    color: 'white',
  },
  realLogo: {
    marginTop: 5,
    height: 26,
    width: 50,
  }
})

export default mainNav;