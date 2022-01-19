import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../../styles';

export default () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.button, {backgroundColor: Colors.dark}]}>
        <Icon name="lock-outline" size={18} color={Colors.light} />
        <Text style={[styles.buttonText, {color: Colors.light}]}>
          Nova Senha
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('SignIn')}
        activeOpacity={0.6}
        style={[
          styles.button,
          {backgroundColor: Colors.lightGray, marginLeft: 16},
        ]}>
        <Icon name="logout" size={18} color={Colors.dark} />
        <Text style={[styles.buttonText, {color: Colors.dark}]}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    paddingVertical: 12,
    width: 144,
  },
  buttonText: {
    marginLeft: 8,
  },
});
