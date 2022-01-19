import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Colors} from '../../styles';
import AvatarImage from './Components/AvatarImage';
import Buttons from './Components/Buttons';
import ProfileInfo from './Components/ProfileInfo';

export default () => {
  return (
    <ScrollView style={styles.container}>
      <AvatarImage />
      <Buttons />
      <ProfileInfo />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
  },
});
