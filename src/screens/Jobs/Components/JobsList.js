import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  Vibration,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {NotFound} from '../../../components';
import {Config} from '../../../core';
import {getJobsRequest} from '../../../store/reducers/jobSlice';
import {updateFavoriteJobRequest} from '../../../store/reducers/userSlice';
import {Colors} from '../../../styles';
import Search from './Search';

const headerComponent = () => <Search />;

const ListEmptyComponent = () => (
  <NotFound
    message="A pesquisa não retornou resultados."
    imageSrc={require('../../../assets/img/not-found.png')}
  />
);

export default () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const {data, status} = useSelector(state => state.job);
  const {signedUser: user} = useSelector(state => state.user);

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
          <View style={styles.cardHeader}>
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

          <View style={styles.cardBody}>
            <Text style={styles.jobDescription}>{item.descricao}</Text>
            <Text style={styles.jobPayment}>{item.salario}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        disableScrollViewPanResponder={true}
        ListHeaderComponent={headerComponent}
        ListEmptyComponent={ListEmptyComponent}
        data={data}
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
  card: {
    backgroundColor: Colors.light,
    padding: 16,
    marginHorizontal: 24,
    marginBottom: 12,
    borderRadius: 16,
    shadowColor: Colors.gray,
    elevation: 8,
  },
  cardHeader: {
    flexDirection: 'row',
  },
  cardImage: {
    height: 42,
    width: 42,
    borderRadius: 12,
  },
  cardTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  cardTitle: {
    color: Colors.dark,
    fontWeight: '700',
  },
  cardSubtitle: {
    color: Colors.gray,
    fontWeight: '300',
  },
  cardBody: {
    marginTop: 12,
  },
  jobDescription: {
    color: Colors.gray,
    marginBottom: 12,
  },
  jobPayment: {
    color: Colors.dark,
  },
});
