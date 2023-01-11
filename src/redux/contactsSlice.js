import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from './services/services.js';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const pending = state => {
  state.isLoading = true;
};

const error = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, pending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, error)
      .addCase(addContact.pending, pending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [...state.items, action.payload];
      })
      .addCase(addContact.rejected, error)
      .addCase(deleteContact.pending, pending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(({ id }) => id !== action.payload);
      })
      .addCase(deleteContact.rejected, error);
  },
});

export const contactsReducer = contactsSlice.reducer;
