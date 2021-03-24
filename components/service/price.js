import React from 'react'
import { View, StyleSheet, Text, FlatList, Dimensions } from "react-native";

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const price = (props) => {
  return (
  <View style={styles.container}>
  <FlatList 
    data={props.data}
    renderItem={item => item.key}
    renderItem={({item}) => {
      return <View style={styles.containerList}>
        <Text style={styles.service}>{item.service}</Text>
        <Text style={styles.cost}>{item.cost}</Text>
      </View>
    }}
  />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: HEIGHT - 170,
  },
  containerList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255, 0.15)',

  },
  service: {
    justifyContent: 'flex-start',
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    marginRight: 15,
    textAlign: 'left',
    width: WIDTH * 0.6 - 20,
  },
  cost: {
    textAlign: 'right',
    justifyContent: 'flex-end',
    color: 'white',
    fontSize: 16,
    width: WIDTH * 0.4 - 30,
  }
})

export default price;