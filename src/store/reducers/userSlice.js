import {createSlice} from '@reduxjs/toolkit';
import {Api} from '../../core';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const updateFavoriteJobRequest = job => async (dispatch, getState) => {
  await Api.put('/usuarios/favoritar-vaga', {vaga_id: job._id});

  dispatch(updateFavoriteJobSuccess(job));

  const {signedUser: user} = getState().user;

  await AsyncStorage.setItem('@user', JSON.stringify(user));
};

export const uploadImage = imagem => async dispatch => {
  try {
    // const formData = new FormData();
    // formData.append('imagem', {
    //   name: imagem.fileName,
    //   type: imagem.type,
    //   uri: imagem.uri,
    // });
    // const response = await Api.put('/usuarios/upload-image', formData, {
    //   headers: {'Content-Type': 'multipart/form-data'},
    // });
    // dispatch(setSignedUser(response.data));
    // await AsyncStorage.setItem('@user', JSON.stringify(user));
  } catch (error) {
    console.error(error.response.data.message);
  }
};

export const user = createSlice({
  name: 'user',
  initialState: {
    signedUser: {},
  },
  reducers: {
    setSignedUser: (state, action) => {
      state.signedUser = action.payload;
    },
    updateFavoriteJobSuccess: (state, action) => {
      const {signedUser: user} = state;
      const job = action.payload;

      const index = user.vagas_favoritas.findIndex(
        item => item._id === job._id,
      );

      if (index === -1) {
        user.vagas_favoritas.push(job);
      } else {
        user.vagas_favoritas.splice(index, 1);
      }
    },
  },
});

export const {setSignedUser, updateFavoriteJobSuccess} = user.actions;

export default user.reducer;
