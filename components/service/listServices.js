import React from 'react'
import { FlatList, TouchableOpacity, Animated, StyleSheet, Image, SafeAreaView, Text, View, Dimensions } from "react-native"
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation  } from '@react-navigation/native'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const listServices = props => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const navigation = useNavigation(); 

  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList 
        showsHorizontalScrollIndicator={false}
        data={props.data}
        onScroll={Animated.event(
          [{ nativeEvent: {contentOffset: {y: scrollY }}}],
          {useNativeDriver: true}
        )}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          const inputRange = [
            -1,
            0,
            120 * index,
            120 * (index + 1.5)
          ]

          const opacityInputRange = [
            -1,
            0,
            120 * index,
            120 * (index + 0.4)
          ]

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0]
          })

          const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0]
          })

          return <TouchableOpacity onPress={() => {
            navigation.navigate('Details', { item })
          }}>

          <Animated.View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: 'rgba(255,255,255, 0.15)',
              height: 90,
              width: WIDTH - 10,
              borderRadius: 15,
              borderTopLeftRadius: 45,
              borderBottomLeftRadius: 45,
              marginTop: 30,
              transform: [{scale}],
              opacity
            }}>
          
              <View style={styles.avatarContainer}>
                <LinearGradient colors={['#ffe4e4', '#ca49fd']} style={styles.avatarBorder}/>
                <View style={styles.avatarHidden}/>
                <Image source={item.avatar} style={styles.avatar}/>
              </View>

              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.desc}>{item.description}</Text>
              </View>

          </Animated.View>
          
          </TouchableOpacity>
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 50,
    paddingTop: 80,
    zIndex: 10,
  },
  avatarContainer: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 25,
  },
  avatarBorder:{
    position: 'absolute',
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  avatarHidden: {
    position: 'absolute',
    height: 84,
    width: 84,
    backgroundColor: 'black',
    borderRadius: 42,
  },
  avatar:{
    height: 78,
    width: 78,
    borderRadius: 40,
    zIndex: 10,
  },
  info: {
    justifyContent: 'center',
    flex: 1,
    paddingRight: 20,
  },
  name: {
    color: 'white',
    fontSize: 16,
  },
  desc: {
    color: 'white',
    fontSize: 12,
    opacity: 0.6,
  }
})

export default listServices;