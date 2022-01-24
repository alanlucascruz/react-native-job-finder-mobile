import {useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {updateJobAccessRequest} from '../../store/reducers/jobSlice';

import {Colors} from '../../styles';

import CompanyImage from './Components/CompanyImage';
import JobDetails from './Components/JobDetails';

export default () => {
  const dispatch = useDispatch();
  const route = useRoute();

  const {job} = route.params;

  useEffect(() => {
    dispatch(updateJobAccessRequest(job._id));
  }, []);

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
