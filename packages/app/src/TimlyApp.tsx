import React from 'react';
import { StyleSheet, View } from 'react-native';

import { AppBar } from './components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const TimlyApp = () => (
  <View style={styles.container}>
    <AppBar />
  </View>
);
