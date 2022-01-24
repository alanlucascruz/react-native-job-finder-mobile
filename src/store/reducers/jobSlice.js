import {createSlice} from '@reduxjs/toolkit';
import {Api} from '../../core';

export const getJobsRequest = status => async (dispatch, getState) => {
  const {filter} = getState().job;

  dispatch(setStatus(status));

  const route = filter ? `/vagas/find/${filter}` : '/vagas';
  const response = await Api.get(route);

  dispatch(getJobsSuccess(response.data));
  dispatch(setStatus('succeeded'));
};

export const updateJobAccessRequest = id => async () => {
  await Api.put(`/vagas/update-acessos/${id}`);
};

export const job = createSlice({
  name: 'job',
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

export const {getJobsSuccess, setStatus, setFilter} = job.actions;

export default job.reducer;
