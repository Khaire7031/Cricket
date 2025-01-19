import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
};

const matchesSlice = createSlice({
    name: 'liveMatches',
    initialState,
    reducers: {
        addToLiveMatches: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { addToLiveMatches } = matchesSlice.actions;

export default matchesSlice.reducer;
