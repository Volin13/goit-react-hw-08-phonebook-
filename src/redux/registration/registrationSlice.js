import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refresh, register } from './registrationAP';

const initialState = {
  user: {
    name: null,
    email: null,
    token: null,
  },
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = { ...action.payload.user, token: action.payload.token };
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = { ...action.payload.user, token: action.payload.token };
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, () => {
        return initialState;
      })
      .addCase(refresh.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.user = { ...action.payload, token: state.user.token };
        state.isLoggedIn = true;
      });
  },
});
const authReducer = authSlice.reducer;

export default authReducer;
