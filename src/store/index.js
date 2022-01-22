import {configureStore} from '@reduxjs/toolkit';
import auth from './reducers/authSlice';
import user from './reducers/userSlice';
import home from './reducers/homeSlice';
import job from './reducers/jobSlice';

export default configureStore({
  reducer: {
    auth,
    user,
    home,
    job,
  },
});
