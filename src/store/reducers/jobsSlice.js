import {createSlice} from '@reduxjs/toolkit';
import {Api} from '../../core';

export const getJobsRequest = (status, filter) => async dispatch => {
  try {
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

export const jobs = createSlice({
  name: 'jobs',
  initialState: {
    data: [],
    status: 'loading', // loading, refreshing, succeeded, failed
  },
  reducers: {
    getJobsSuccess: (state, action) => {
      state.data = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const {getJobsSuccess, setStatus} = jobs.actions;

export default jobs.reducer;
