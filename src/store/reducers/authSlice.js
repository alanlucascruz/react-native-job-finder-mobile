import {createSlice} from '@reduxjs/toolkit';
import {Api} from '../../core';
import {setSignedUser} from './userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const checkSignedUser = () => async dispatch => {
  const token = await AsyncStorage.getItem('@token');
  const user = await AsyncStorage.getItem('@user');

  if (!token) {
    dispatch(setStatus('failed'));
    return;
  }

  dispatch(setToken(token));
  dispatch(setSignedUser(JSON.parse(user)));
  dispatch(setStatus('succeeded'));
};

export const signIn = data => async dispatch => {
  try {
    dispatch(setError(''));
    dispatch(setStatus('loading'));

    const response = await Api.post('/auth/signin', data);
    const user = response.data;

    dispatch(setToken(user.token));
    dispatch(setSignedUser(user));
    dispatch(setStatus('succeeded'));

    await AsyncStorage.setItem('@token', user.token);
    await AsyncStorage.setItem('@user', JSON.stringify(user));
  } catch (error) {
    dispatch(setStatus('failed'));
    // dispatch(setError(error.response.data.message));
  }
};

export const signOut = () => async dispatch => {
  await AsyncStorage.clear();

  dispatch(setToken(''));
};

export const auth = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    status: 'idle', // idle, loading, succeeded, failed
    error: '',
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {setToken, setStatus, setError} = auth.actions;

export default auth.reducer;
