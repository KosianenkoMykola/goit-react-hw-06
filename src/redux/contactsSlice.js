import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './fetchContacts';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
      items: [],
      status: 'idle',
      error: null,
    },
    reducers: {
      addContact: (state, action) => {
        state.items.push(action.payload);
      },
      deleteContact: (state, action) => {
        state.items = state.items.filter(contact => contact.id !== action.payload);
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchContacts.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchContacts.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.items = action.payload;
        })
        .addCase(fetchContacts.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
  export const { addContact, deleteContact } = contactsSlice.actions;
  export default contactsSlice.reducer;
  export const selectContacts = state => state.contacts.items;