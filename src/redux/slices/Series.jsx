import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
};

const seriesSlice = createSlice({
    name: 'Series',
    initialState,
    reducers: {
        setSeriesData: (state, action) => {
            state.data = action.payload;
        },
        clearSeriesData: (state) => {
            state.data = [];
        },
    },
});

export const { setSeriesData, clearSeriesData } = seriesSlice.actions;

export default seriesSlice.reducer;
