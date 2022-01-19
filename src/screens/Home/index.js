import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Colors} from '../../styles';
import MoreJobs from './Components/MoreJobs';
import {getJobsRequest} from '../../store/reducers/jobsSlice';
import {Loading} from '../../components';

export default () => {
  const dispatch = useDispatch();
  const {status} = useSelector(state => state.jobs);

  useEffect(() => {
    dispatch(getJobsRequest('loading', ''));
  }, []);

  if (status === 'loading') return <Loading />;

  return (
    <View style={styles.container}>
      <MoreJobs />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
  },
});
