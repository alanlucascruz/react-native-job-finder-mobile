import {createSlice} from '@reduxjs/toolkit';
import {Api} from '../../core';

export const getJobsRequest = status => async (dispatch, getState) => {
  dispatch(setStatus(status));

  const response = await Api.get('/vagas');

  dispatch(getJobsSuccess(response.data));
  dispatch(setStatus('succeeded'));
};

export const home = createSlice({
  name: 'home',
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

export const {getJobsSuccess, setStatus} = home.actions;

export default home.reducer;
