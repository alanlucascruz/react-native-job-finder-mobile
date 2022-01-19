import {configureStore} from '@reduxjs/toolkit';
import jobs from './reducers/jobsSlice';

export default configureStore({
  reducer: {
    jobs,
  },
});
