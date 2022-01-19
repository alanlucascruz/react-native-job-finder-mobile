import React, {Fragment} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getJobsRequest} from '../../../store/reducers/jobsSlice';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../../styles';
import {Config} from '../../../core';

import Search from './Search';
import PopularJobs from './PopularJobs';

export default () => {
  const dispatch = useDispatch();

  const {data, status} = useSelector(state => state.jobs);

  const dataFiltered = data.slice(4);

  const onRefresh = () => {
    dispatch(getJobsRequest('refreshing', ''));
  };

  const JobImage = ({image}) => {
    let source = require('../../../assets/img/no-image.png');

    if (image) {
      source = {uri: Config.apiURL + image};
    }

    return <Image style={styles.cardImage} source={source} />;
  };

  const headerComponent = () => (
    <Fragment>
      <Search />
      <PopularJobs />
      <Text style={styles.title}>Mais vagas</Text>
    </Fragment>
  );

  const renderItem = ({item}) => {
    return (
      <TouchableWithoutFeedback>
        <View style={styles.card}>
          <JobImage image={item.imagem} />
          <View style={styles.cardTitleContainer}>
            <Text style={styles.cardTitle}>{item.nome}</Text>
            <Text style={styles.cardSubtitle}>{item.empresa.nome}</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.6}
            hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}>
            <Icon
              // name={item.favorito ? 'favorite' : 'favorite-outline'}
              name="favorite-outline"
              size={21}
              color={Colors.dark}
            />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={headerComponent}
        data={dataFiltered}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        onRefresh={onRefresh}
        refreshing={status === 'refreshing'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: Colors.dark,
    fontWeight: '600',
    marginHorizontal: 24,
    marginTop: 8,
    marginBottom: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: Colors.light,
    padding: 12,
    marginHorizontal: 24,
    marginBottom: 12,
    borderRadius: 16,
    shadowColor: Colors.gray,
    elevation: 8,
  },
  cardTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  cardImage: {
    height: 42,
    width: 42,
    borderRadius: 12,
    marginRight: 8,
  },
  cardTitle: {
    color: Colors.dark,
    fontWeight: '700',
  },
  cardSubtitle: {
    color: Colors.gray,
    fontWeight: '300',
  },
});
