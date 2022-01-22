import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Loading} from '../../components';
import {getJobsRequest} from '../../store/reducers/jobSlice';
import {Colors} from '../../styles';
import JobsList from './Components/JobsList';

export default () => {
  const {status} = useSelector(state => state.home);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobsRequest('loading'));
  }, []);

  if (status === 'loading') return <Loading />;

  return (
    <View style={styles.container}>
      <JobsList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
  },
});
