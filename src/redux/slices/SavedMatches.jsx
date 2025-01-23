import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    savedMatches: JSON.parse(localStorage.getItem('savedMatches')) || [],
};

const savedMatchSlice = createSlice({
    name: 'savedmatch',
    initialState,
    reducers: {
        saveMatch: (state, action) => {
            const existingMatch = state.savedMatches.find(
                match => match.match_id === action.payload.match_id
            );
            if (!existingMatch) {
                state.savedMatches.push(action.payload);
                localStorage.setItem('savedMatches', JSON.stringify(state.savedMatches));
            }
        },
        removeMatch: (state, action) => {
            state.savedMatches = state.savedMatches.filter(
                match => match.match_id !== action.payload
            );
            localStorage.setItem('savedMatches', JSON.stringify(state.savedMatches));
        },
        clearSavedMatches: (state) => {
            state.savedMatches = [];
            localStorage.removeItem('savedMatches');
        }
    }
});

export const { saveMatch, removeMatch, clearSavedMatches } = savedMatchSlice.actions;
export default savedMatchSlice.reducer; 
