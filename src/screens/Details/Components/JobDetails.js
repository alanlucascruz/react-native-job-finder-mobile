import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Colors} from '../../../styles';

export default () => {
  const route = useRoute();

  const {job} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre a vaga</Text>
      <Text style={styles.paragraph}>{job.descricao}</Text>

      <Text style={styles.title}>Requisitos</Text>

      <View style={styles.list}>
        <View style={styles.listItem}>
          <Text style={styles.listPoint}>•</Text>
          <Text style={styles.listText}>
            Aliquam scelerisque hendrerit ante. Suspendisse pulvinar condimentum
            nisl porta pretium. Donec maximus volutpat nisi.
          </Text>
        </View>

        {job.requisitos.map((texto, index) => (
          <View style={styles.listItem} key={index}>
            <Text style={styles.listPoint}>•</Text>
            <Text style={styles.listText}>{texto}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: -16,
  },
  title: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: '500',
    color: Colors.dark,
  },
  paragraph: {
    color: Colors.gray,
    marginTop: 8,
  },
  list: {
    marginVertical: 8,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  listPoint: {
    marginLeft: 4,
    marginRight: 8,
    marginTop: -6,
    fontSize: 24,
    color: Colors.gray,
  },
  listText: {
    color: Colors.gray,
  },
});
