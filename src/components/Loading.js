import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Colors} from '../styles';

export default () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={Colors.dark} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light,
  },
});
