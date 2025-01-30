import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  logged: false,
  userId: null,
  accessToken: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedStatus: (state, action) => {
      state.logged = action.payload;  // true/false olarak güncelleniyor
    },
  },
});

export const { setLoggedStatus } = authSlice.actions;

export default authSlice.reducer;
