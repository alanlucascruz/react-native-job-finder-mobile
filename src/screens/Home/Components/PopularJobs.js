import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../../styles';
import {useSelector} from 'react-redux';
import {Config} from '../../../core';

export default () => {
  const navigation = useNavigation();

  const {data} = useSelector(state => state.jobs);

  const dataFiltered = data.slice(0, 4);

  const JobImage = ({image}) => {
    let source = require('../../../assets/img/no-image.png');

    if (image) {
      source = {uri: Config.apiURL + image};
    }

    return <Image style={styles.cardImage} source={source} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Vagas mais populares</Text>
        <TouchableOpacity
          onPress={() => navigation.jumpTo('Jobs')}
          activeOpacity={0.6}
          hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}>
          <Text style={styles.showAll}>Ver todos</Text>
        </TouchableOpacity>
      </View>

      <View>
        <ScrollView
          style={styles.horizontalScrollView}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {dataFiltered.map((item, index) => (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.navigate('Details')}>
              <View
                style={[
                  styles.card,
                  {marginRight: dataFiltered.length - 1 === index ? 48 : 8},
                ]}>
                <View style={styles.cardHeader}>
                  <JobImage image={item.imagem} />
                  <View style={styles.cardTitleContainer}>
                    <Text style={styles.cardTitle}>{item.empresa.nome}</Text>
                    <Text style={styles.cardSubtitle}>
                      {item.empresa.localizacao}
                    </Text>
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}>
                    <Icon
                      // name={item.favorito ? 'favorite' : 'favorite-outline'}
                      name="favorite-outline"
                      size={21}
                      color={Colors.gray}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.cardBody}>
                  <Text style={styles.jobDescription}>{item.nome}</Text>
                  <Text style={styles.jobPayment}>{item.salario}</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 16,
    color: Colors.dark,
    fontWeight: '600',
  },
  showAll: {
    color: Colors.gray,
    textTransform: 'capitalize',
    fontSize: 13,
  },
  horizontalScrollView: {
    paddingLeft: 24,
    paddingVertical: 16,
  },
  card: {
    backgroundColor: Colors.dark,
    padding: 16,
    borderRadius: 16,
    width: 270,
    marginRight: 16,
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
    color: Colors.light,
    textTransform: 'uppercase',
  },
  cardSubtitle: {
    color: Colors.gray,
    fontSize: 12,
  },
  cardBody: {
    marginTop: 8,
  },
  jobDescription: {
    color: Colors.light,
    fontSize: 16,
    fontWeight: '500',
    textTransform: 'capitalize',
    marginBottom: 8,
  },
  jobPayment: {
    color: Colors.gray,
    fontWeight: '300',
  },
});
