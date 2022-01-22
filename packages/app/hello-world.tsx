import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const HelloWorld = () => (
  <View style={styles.container}>
    <Text>Hello, World!</Text>
  </View>
);
