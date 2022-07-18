import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Platform,
} from 'react-native';
import {Colors} from '../../../styles';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {Config} from '../../../core';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {launchImageLibrary} from 'react-native-image-picker';
import {uploadImage} from '../../../store/reducers/userSlice';

export default () => {
  const {signedUser: user} = useSelector(state => state.user);

  const dispatch = useDispatch();

  const [photo, setPhoto] = useState(null);

  const onChoosePhoto = async () => {
    const response = await launchImageLibrary({mediaType: 'photo'});

    if (response.didCancel) return;

    const onlyFirstPhoto = response.assets[0];

    setPhoto(onlyFirstPhoto);

    dispatch(uploadImage(onlyFirstPhoto));
  };

  const AvatarImage = ({image}) => {
    let source = require('../../../assets/img/no-avatar.png');

    if (image) {
      source = {uri: Config.apiURL + image};
    }

    if (photo) {
      source = {uri: photo.uri};
    }

    return <Image style={styles.avatarImage} source={source} />;
  };

  return (
    <ScrollView>
      <LinearGradient
        style={styles.header}
        colors={[Colors.darkGray, Colors.dark]}
        useAngle={true}
        angle={45}>
        <Text style={styles.title}>Perfil</Text>
      </LinearGradient>

      <View style={styles.content}>
        <AvatarImage image={user.imagem} />

        <TouchableOpacity
          // onPress={onChoosePhoto}
          style={styles.buttonImage}
          activeOpacity={0.6}
          hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}>
          <Icon name="perm-media" size={18} color={Colors.light} />
        </TouchableOpacity>

        <Text style={styles.textName}>{user.nome}</Text>
        <Text style={styles.textEmail}>{user.email}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 192,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 21,
    fontWeight: '600',
    color: Colors.light,
    textTransform: 'capitalize',
    marginTop: 16,
  },
  content: {
    alignItems: 'center',
    backgroundColor: Colors.light,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    top: -32,
  },
  avatarImage: {
    height: 128,
    width: 128,
    marginTop: -72,
    borderRadius: 64,
    borderColor: Colors.light,
    borderWidth: 4,
  },
  buttonImage: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: Colors.dark,
    height: 32,
    width: 32,
    top: -36,
    right: -32,
  },
  textName: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.dark,
  },
  textEmail: {
    color: Colors.gray,
  },
});
