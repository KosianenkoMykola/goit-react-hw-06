import { createAsyncThunk } from '@reduxjs/toolkit';
import contacts from '../contacts.json';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    return contacts;
  }
);
