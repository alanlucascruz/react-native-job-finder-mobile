import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../../styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default () => {
  const navigation = useNavigation();

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

        <TouchableOpacity style={styles.button} activeOpacity={0.6}>
          <Icon name="favorite-outline" size={21} color={Colors.light} />
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.content}>
        {/* <Image
          style={styles.avatarImage}
          source={require('../../../assets/img/logo-1.png')}
        /> */}
        <Text style={styles.title}>Programador Senior Web</Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleJob}>Level Up Self</Text>
          <Text style={styles.subtitleSeparator}>•</Text>
          <Icon
            style={styles.subtitleIcon}
            name="location-on"
            size={18}
            color={Colors.gray}
          />
          <Text style={styles.subtitleLocation}>Criciúma, SC</Text>
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
