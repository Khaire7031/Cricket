import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
};

const matchesSlice = createSlice({
    name: 'Matches',
    initialState,
    reducers: {
        addToMatches: (state, action) => {
            state.data = [...state.data, ...action.payload];
        },
    },
});

export const { addToMatches } = matchesSlice.actions;

export default matchesSlice.reducer;
