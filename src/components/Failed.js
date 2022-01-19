import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../styles';

export default () => {
  return (
    <View style={styles.container}>
      <Icon name="wifi" size={48} color={Colors.dark} />
      <Text style={styles.title}>Falha de comunicação</Text>
      <Text style={styles.subtitle}>Sem conexão com a Internet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light,
  },
  icon: {},
  title: {
    marginTop: 16,
    color: Colors.dark,
    fontSize: 24,
  },
  subtitle: {
    color: Colors.dark,
    opacity: 0.8,
  },
});
