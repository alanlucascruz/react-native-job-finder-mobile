import {createSlice} from '@reduxjs/toolkit';

export const user = createSlice({
  name: 'user',
  initialState: {
    signedUser: {},
  },
  reducers: {
    setSignedUser: (state, action) => {
      state.signedUser = action.payload;
    },
  },
});

export const {setSignedUser} = user.actions;

export default user.reducer;
