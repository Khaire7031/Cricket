
import { configureStore } from '@reduxjs/toolkit';
import liveMatchesReducer from './slices/Matches';
import savedMatchReducr from './slices/SavedMatches'

const store = configureStore({
    reducer: {
        liveMatches: liveMatchesReducer, 
        savedmatch: savedMatchReducr,
    },
});

export default store;
