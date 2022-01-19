import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../styles';
import JobsList from './Components/JobsList';

export default () => (
  <View style={styles.container}>
    <JobsList />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
  },
});
