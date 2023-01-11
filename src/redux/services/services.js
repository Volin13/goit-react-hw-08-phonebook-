import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { onSucsessMessage, onErrorMessage } from '../../components/App';

axios.defaults.baseURL = 'https://63bdb72cc832b33efe18bdb2.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      onErrorMessage('Something went wrong');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      onSucsessMessage(<span>{contact.name} has been created!</span>);
      return data;
    } catch (error) {
      onErrorMessage('Something went wrong');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      onSucsessMessage(<span>{data.name} has been deleted.</span>);
      return data.id;
    } catch (error) {
      onErrorMessage(error.message || 'Something went wrong');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
