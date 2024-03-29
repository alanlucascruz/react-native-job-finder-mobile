import React, {Fragment} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Vibration,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getJobsRequest} from '../../../store/reducers/homeSlice';
import {Config} from '../../../core';
import {Colors} from '../../../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {updateFavoriteJobRequest} from '../../../store/reducers/userSlice';
import PopularJobs from './PopularJobs';

const headerComponent = name => (
  <Fragment>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Olá {name.split(' ', 1).join()},</Text>
      <Text style={styles.title}>Inicie sua nova jornada</Text>
    </View>

    <PopularJobs />

    <Text style={styles.subTitle}>Mais vagas</Text>
  </Fragment>
);

export default () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const {data, status} = useSelector(state => state.home);
  const {signedUser: user} = useSelector(state => state.user);

  const dataFiltered = data.slice(4);

  const onRefresh = () => {
    dispatch(getJobsRequest('refreshing'));
  };

  const JobImage = ({image}) => {
    let source = require('../../../assets/img/no-image.png');

    if (image) {
      source = {uri: Config.apiURL + image};
    }

    return <Image style={styles.cardImage} source={source} />;
  };

  const JobIcon = ({item}) => {
    const {vagas_favoritas} = user;

    let iconName = 'favorite-outline';

    const found = vagas_favoritas.find(vaga => vaga._id === item._id);

    if (found) {
      iconName = 'favorite';
    }

    return <Icon name={iconName} size={21} color={Colors.dark} />;
  };

  const favoriteJob = job => {
    Vibration.vibrate(10);

    dispatch(updateFavoriteJobRequest(job));
  };

  const renderItem = ({item}) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Details', {job: item})}>
        <View style={styles.card}>
          <JobImage image={item.imagem} />
          <View style={styles.cardTitleContainer}>
            <Text style={styles.cardTitle}>{item.nome}</Text>
            <Text style={styles.cardSubtitle}>{item.empresa.nome}</Text>
          </View>
          <TouchableOpacity
            onPress={() => favoriteJob(item)}
            activeOpacity={0.6}
            hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}>
            <JobIcon item={item} />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => headerComponent(user.nome)}
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
  titleContainer: {
    paddingHorizontal: 24,
    marginTop: 16,
  },
  title: {
    fontSize: 21,
    fontWeight: '600',
    color: Colors.dark,
    textTransform: 'capitalize',
  },
  subTitle: {
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
