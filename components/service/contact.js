import React from 'react'
import { View, StyleSheet, Text } from "react-native";

const contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.test}>Контакты</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  test: {
    color: 'white'
  }
})

export default contact;