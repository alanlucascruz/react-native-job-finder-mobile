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
import {updateFavoriteJobRequest} from '../../../store/reducers/userSlice';
import {Colors} from '../../../styles';

const headerComponent = () => <Text style={styles.title}>Favoritos</Text>;

const ListEmptyComponent = () => (
  <NotFound
    message={'Seus itens favoritos aparecerão aqui.'}
    imageSrc={require('../../../assets/img/not-found-2.png')}
  />
);

export default () => {
  const navigation = useNavigation();

  const {signedUser: user} = useSelector(state => state.user);
  const {vagas_favoritas: data} = user;

  const dispatch = useDispatch();

  const favoriteJob = job => {
    Vibration.vibrate(10);

    dispatch(updateFavoriteJobRequest(job));
  };

  const JobImage = ({image}) => {
    let source = require('../../../assets/img/no-image.png');

    if (image) {
      source = {uri: Config.apiURL + image};
    }

    return <Image style={styles.cardImage} source={source} />;
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
              <Icon name="favorite" size={21} color={Colors.dark} />
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
        ListHeaderComponent={headerComponent}
        ListEmptyComponent={ListEmptyComponent}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 21,
    fontWeight: '600',
    color: Colors.dark,
    marginVertical: 16,
    marginHorizontal: 24,
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
