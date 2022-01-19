import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Provider} from 'react-redux';
import store from './store';

import SignIn from './screens/Auth/SignIn';
import SignUp from './screens/Auth/SignUp';
import TabBar from './screens/TabBar';
import Details from './screens/Details';

// Ignore Logs
// LogBox.ignoreLogs(['Reanimated 2']);

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="TabBar" component={TabBar} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
