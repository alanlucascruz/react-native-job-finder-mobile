import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../styles';

export default ({message, imageSrc}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageSrc} />
      <Text style={styles.title}>Nada por aqui.</Text>
      <Text style={styles.subtitle}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 24,
  },
  image: {
    height: 200,
    width: 200,
  },
  title: {
    fontSize: 21,
    color: Colors.gray,
    marginTop: 8,
  },
  subtitle: {
    color: Colors.gray,
    marginTop: 4,
  },
});
