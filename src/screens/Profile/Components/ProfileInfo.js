import React from 'react';
import {StyleSheet, Text, View, Linking} from 'react-native';
import {Colors} from '../../../styles';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default () => {
  const {signedUser: user} = useSelector(state => state.user);

  const openWhatsapp = whatsapp => {
    const onlyNumbers = whatsapp.replace(/[^\d]/g, '');

    Linking.openURL(`https://wa.me/55${onlyNumbers}`);
  };

  const openLink = link => Linking.openURL(link);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações</Text>

      <View style={styles.item}>
        <MIcon name="work-outline" size={24} color={Colors.dark} />
        <Text style={styles.itemText}>{user.profissao}</Text>
      </View>

      <TouchableOpacity
        style={styles.item}
        activeOpacity={0.6}
        onPress={() => openWhatsapp(user.whatsapp)}>
        <MCIcon name="whatsapp" size={24} color={Colors.dark} />
        <Text style={styles.itemText}>{user.whatsapp}</Text>
        <MCIcon name="open-in-new" size={16} color={Colors.dark} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        activeOpacity={0.6}
        onPress={() => openLink(user.link_portfolio)}>
        <MCIcon name="link" size={24} color={Colors.dark} />
        <Text style={styles.itemText}>{user.link_portfolio}</Text>
        <MCIcon name="open-in-new" size={16} color={Colors.dark} />
      </TouchableOpacity>
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
    marginRight: 4,
  },
});
