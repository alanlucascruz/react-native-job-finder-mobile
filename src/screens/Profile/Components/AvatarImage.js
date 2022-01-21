import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../../styles';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import {Config} from '../../../core';

export default () => {
  const {signedUser: user} = useSelector(state => state.user);

  // const AvatarImage = ({image}) => {
  //   let source = require('../../../assets/img/no-avatar.png');

  //   if (image) {
  //     source = {uri: Config.apiURL + image};
  //   }

  //   return <Image style={styles.avatarImage} source={source} />;
  // };

  return (
    <View>
      <LinearGradient
        style={styles.header}
        colors={[Colors.darkGray, Colors.dark]}
        useAngle={true}
        angle={45}>
        <Text style={styles.title}>Perfil</Text>
      </LinearGradient>

      <View style={styles.content}>
        {/* <AvatarImage image={user.imagem} /> */}
        <Text style={styles.textName}>Alan Cruz</Text>
        <Text style={styles.textEmail}>alanlucascruz@gmail.com</Text>
      </View>
    </View>
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
  textName: {
    marginTop: 16,
    fontSize: 24,
    fontWeight: '700',
    color: Colors.dark,
  },
  textEmail: {
    color: Colors.gray,
  },
});
