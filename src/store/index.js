import {configureStore} from '@reduxjs/toolkit';
import home from './reducers/homeSlice';

export default configureStore({
  reducer: {
    home,
  },
});
