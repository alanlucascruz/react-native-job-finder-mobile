import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './core';
import {createStackNavigator} from '@react-navigation/stack';

import {Provider, useDispatch, useSelector} from 'react-redux';
import store from './store';
import {checkSignedUser} from './store/reducers/authSlice';

import {Loading} from './components';

import SignIn from './screens/Auth/SignIn';
import SignUp from './screens/Auth/SignUp';
import UpdatePassword from './screens/Auth/UpdatePassword';

import TabBar from './screens/TabBar';
import Details from './screens/Details';

StatusBar.setBackgroundColor('#ffffff');
StatusBar.setBarStyle('dark-content');

const Stack = createStackNavigator();

const Routes = () => {
  const {status, token} = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkSignedUser());
  }, []);

  if (status === 'idle') {
    return <Loading />;
  }

  return (
    <NavigationContainer ref={Navigation.navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!token ? (
          <Stack.Group>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="TabBar" component={TabBar} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
