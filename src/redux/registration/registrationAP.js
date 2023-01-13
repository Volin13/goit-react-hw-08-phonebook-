import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setRegistrationHeader = token => {
  if (!token) return;
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearRegistrationHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      setRegistrationHeader(data.token);
      toast.success(`Nice to meet you ${data.user.name}!`);
      return data;
    } catch (error) {
      toast.error(`Please use another email adress.`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      setRegistrationHeader(data.token);
      toast.success(`Nice to see you again, ${data.user.name}!`);
      return data;
    } catch (error) {
      toast.error(`Wrong email or password. Please try again.`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearRegistrationHeader();
  } catch (error) {
    toast.error(`Something went wrong. ${error.message}. Please try again.`);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.user.token;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue(null);
  }
  setRegistrationHeader(persistedToken);
  try {
    const { data } = await axios.get('/users/current');
    toast.success(`You entered in system like ${data.name}!`);
    return data;
  } catch (error) {
    toast.error(`Something went wrong. ${error.message}. Please try again.`);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.user.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue(null);
    }
    setRegistrationHeader(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      toast.success(`You entered in system like ${data.name}!`);
      return data;
    } catch (error) {
      toast.error(`Something went wrong. ${error.message}. Please try again.`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
