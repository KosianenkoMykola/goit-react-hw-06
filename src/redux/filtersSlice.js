import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'filters',
    initialState: {
        name: "",
    },
    reducers: {
        setFilter: (state, actions) => {
            state.name = actions.payload;
        }
    }
})

export const selectNameFilter = state => state.filters.name;

export const { setFilter } = slice.actions;

export default slice.reducer;