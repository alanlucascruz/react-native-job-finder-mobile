import {createSlice} from '@reduxjs/toolkit';
import {Api} from '../../core';

export const getJobsRequest = status => async (dispatch, getState) => {
  try {
    const {filter} = getState().home;

    dispatch(setStatus(status));

    const route = filter ? `/vagas/find/${filter}` : '/vagas';
    const response = await Api.get(route);

    dispatch(getJobsSuccess(response.data));
    dispatch(setStatus('succeeded'));
  } catch (error) {
    dispatch(setStatus('failed'));
    console.error(error); // Verificar NetWork Error e Expiração de Token
  }
};

export const home = createSlice({
  name: 'home',
  initialState: {
    data: [],
    status: 'loading', // loading, refreshing, succeeded, failed
    filter: '',
  },
  reducers: {
    getJobsSuccess: (state, action) => {
      state.data = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const {getJobsSuccess, setStatus, setFilter} = home.actions;

export default home.reducer;
