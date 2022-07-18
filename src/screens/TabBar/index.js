import React from 'react';
import {View, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../styles';

import HomeScreen from '../Home';
import JobsScreen from '../Jobs';
import FavoritesScreen from '../Favorites';
import ProfileScreen from '../Profile';

const TabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.navigationContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const Icon = options.tabBarIcon;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={styles.button}
            activeOpacity={0.7}
            hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}>
            <Icon color={isFocused ? Colors.primary : Colors.light} size={24} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={props => <TabBar {...props} />}
        screenOptions={{
          headerShown: false,
        }}
        backBehavior="none">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: props => <MCIcon name="home-outline" {...props} />,
          }}
        />

        <Tab.Screen
          name="Jobs"
          component={JobsScreen}
          options={{
            tabBarIcon: props => <MIcon name="work-outline" {...props} />,
          }}
        />

        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarIcon: props => <MIcon name="favorite-border" {...props} />,
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: props => <MIcon name="person-outline" {...props} />,
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
  },
  navigationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: Colors.dark,
    height: 64,
    marginBottom: 12,
    marginHorizontal: 12,
    borderRadius: 32,
    paddingHorizontal: 8,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
    width: 64,
  },
  defaultScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light,
  },
});
