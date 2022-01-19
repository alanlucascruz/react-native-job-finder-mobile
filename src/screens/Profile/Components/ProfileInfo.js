import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../../styles';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações</Text>

      <View style={styles.item}>
        <MIcon name="work-outline" size={24} color={Colors.dark} />
        <Text style={styles.itemText}>Desenvolvedor Full Stack</Text>
      </View>

      <View style={styles.item}>
        <MCIcon name="whatsapp" size={24} color={Colors.dark} />
        <Text style={styles.itemText}>(48) 99999-0251</Text>
      </View>

      <View style={styles.item}>
        <MCIcon name="link" size={24} color={Colors.dark} />
        <Text style={styles.itemText}>https:\\avancedev.com.br</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: 32,
  },
  title: {
    fontSize: 21,
    fontWeight: '600',
    color: Colors.dark,
    marginBottom: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemText: {
    color: Colors.dark,
    marginLeft: 16,
  },
});
