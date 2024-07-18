import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
    },
    reducers: {
        setContacts(action) {
            action.payload;
          },
        addContact: (state, action) => {
            state.items.push(action.payload);
            },
        deleteContact: (state, action) => {
         state.items = state.items.filter(contact => contact.id !== action.payload)
        },
    },
})

export const selectContacts = state => state.contacts.items;

export const {setContacts, deleteContact, addContact } = slice.actions;

export default slice.reducer;