import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../../styles';

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre a vaga</Text>

      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
        pulvinar placerat. Morbi tincidunt risus vestibulum lacus sagittis.
      </Text>

      <Text style={styles.title}>Requisitos</Text>

      <View style={styles.list}>
        <View style={styles.listItem}>
          <Text style={styles.listPoint}>•</Text>
          <Text style={styles.listText}>
            Aliquam scelerisque hendrerit ante. Suspendisse pulvinar condimentum
            nisl porta pretium. Donec maximus volutpat nisi.
          </Text>
        </View>

        <View style={styles.listItem}>
          <Text style={styles.listPoint}>•</Text>
          <Text style={styles.listText}>
            Nam ornare eu tortor at venenatis. Praesent aliquam arcu et
            consectetur lacinia. Nunc ac fringilla lectus, quis tempor odio.
            Cras ipsum ex, auctor ac risus sit amet accumsan gravida magna.
            Vivamus metus massa, vulputate vitae felis vel, elementum vulputate
            libero.
          </Text>
        </View>

        <View style={styles.listItem}>
          <Text style={styles.listPoint}>•</Text>
          <Text style={styles.listText}>
            Sed a est volutpat, dapibus ex non, tincidunt sapien. Pellentesque
            quis tortor neque. Nulla mauris dui, dictum id enim ut, consequat
            convallis lorem. Aenean non mauris eget neque consequat faucibus.
            Donec vestibulum, ligula sit amet fringilla aliquam, augue enim
            interdum purus, at tincidunt massa libero ac lacus. In dignissim
            erat eu lacus placerat, quis auctor mauris sodales. Nam in odio
            sapien. Proin hendrerit tempus arcu nec congue. Cras lacinia enim
            nulla, a semper lorem tincidunt sed.
          </Text>
        </View>

        <View style={styles.listItem}>
          <Text style={styles.listPoint}>•</Text>
          <Text style={styles.listText}>
            Sed pellentesque mi sed erat sagittis, sed elementum lorem
            vestibulum. Maecenas vel ligula non ipsum lacinia ultrices eu quis
            lacus. Pellentesque sodales lectus sem. Aenean porta magna quis dui
            consequat lobortis. Sed sodales imperdiet lorem, non dictum risus
            ornare nec. Aenean ac aliquam est, eu facilisis orci. Etiam rutrum
            bibendum egestas.
          </Text>
        </View>
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
