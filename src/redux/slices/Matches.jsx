import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
};

const matchesSlice = createSlice({
    name: 'Matches',
    initialState,
    reducers: {
        addToMatches: (state, action) => {
            if (Array.isArray(action.payload)) {
                state.data = [...state.data, ...action.payload];
            } else {
                console.error("Expected an array but got:", action.payload);
            }
        },
    },
});

export const { addToMatches } = matchesSlice.actions;

export default matchesSlice.reducer;
