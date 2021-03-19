import React from "react"
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, StyleSheet, Text, View } from "react-native"

const header = (props) => {
  return (
    <View style={styles.container}>
        <LinearGradient colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,1)']} style={styles.background}/>
        <ImageBackground source={props.backImg} style={styles.backImg}  />
        <View style={styles.info}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.subtitle}>{props.subtitle}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    height: 150,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  backImg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  background:{
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  info:{
    marginTop: 18,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 22,
    marginBottom: 14,
    zIndex: 2,
  },
  subtitle: {
    color: 'white',
    fontSize: 14,
    zIndex: 2,
  }
})

export default header;