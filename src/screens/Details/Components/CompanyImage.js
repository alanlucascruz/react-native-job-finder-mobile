import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Colors} from '../../../styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {updateFavoriteJobRequest} from '../../../store/reducers/userSlice';
import {Config} from '../../../core';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();

  const dispatch = useDispatch();

  const {job} = route.params;

  const {signedUser: user} = useSelector(state => state.user);

  const JobImage = ({image}) => {
    let source = require('../../../assets/img/no-image.png');

    if (image) {
      source = {uri: Config.apiURL + image};
    }

    return <Image style={styles.avatarImage} source={source} />;
  };

  const JobIcon = ({job}) => {
    const {vagas_favoritas} = user;

    let iconName = 'favorite-outline';

    const found = vagas_favoritas.find(vaga => vaga._id === job._id);

    if (found) {
      iconName = 'favorite';
    }

    return <Icon name={iconName} size={21} color={Colors.light} />;
  };

  const favoriteJob = job => {
    Vibration.vibrate(10);

    dispatch(updateFavoriteJobRequest(job));
  };

  return (
    <View>
      <LinearGradient
        style={styles.buttonContainer}
        colors={[Colors.darkGray, Colors.dark]}
        useAngle={true}
        angle={45}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.6}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={21} color={Colors.light} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.6}
          onPress={() => favoriteJob(job)}>
          <JobIcon job={job} />
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.content}>
        <JobImage image={job.imagem} />
        <Text style={styles.title}>{job.nome}</Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleJob}>{job.empresa.nome}</Text>
          <Text style={styles.subtitleSeparator}>•</Text>
          <Icon
            style={styles.subtitleIcon}
            name="location-on"
            size={18}
            color={Colors.gray}
          />
          <Text style={styles.subtitleLocation}>{job.empresa.localizacao}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 156,
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    width: 44,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: Colors.light,
  },
  content: {
    alignItems: 'center',
    backgroundColor: Colors.light,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    top: -32,
    paddingHorizontal: 24,
  },
  avatarImage: {
    height: 88,
    width: 88,
    marginTop: -56,
    borderRadius: 16,
    backgroundColor: Colors.lightGray,
  },
  title: {
    marginTop: 16,
    fontSize: 21,
    fontWeight: '500',
    color: Colors.dark,
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitleJob: {
    color: Colors.gray,
    textTransform: 'uppercase',
  },
  subtitleSeparator: {
    fontSize: 21,
    color: Colors.gray,
    marginLeft: 4,
  },
  subtitleIcon: {
    marginLeft: 4,
  },
  subtitleLocation: {
    color: Colors.gray,
    marginLeft: 4,
  },
});
