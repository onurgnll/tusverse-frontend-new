import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: null,
  username: '',
  email: '',
  profilePicture: '',
  isLoggedIn: false, // Kullanıcının giriş yapıp yapmadığını belirten durum
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.userId = action.payload.userId;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.profilePicture = action.payload.profilePicture || '';
      state.isLoggedIn = true; // Kullanıcı giriş yapmış olarak işaretlenir
    },
    clearUserDetails: (state) => {
      state.userId = null;
      state.username = '';
      state.email = '';
      state.profilePicture = '';
      state.isLoggedIn = false; // Kullanıcı çıkış yapmış olarak işaretlenir
    },
  },
});

export const { setUserDetails, clearUserDetails } = userSlice.actions;

export default userSlice.reducer;
