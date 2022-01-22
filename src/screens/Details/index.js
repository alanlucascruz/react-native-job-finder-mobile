import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import {Colors} from '../../styles';

import CompanyImage from './Components/CompanyImage';
import JobDetails from './Components/JobDetails';

export default () => {
  return (
    <ScrollView style={styles.container}>
      <CompanyImage />
      <JobDetails />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
  },
});
