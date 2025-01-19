
import { configureStore } from '@reduxjs/toolkit';
import liveMatchesReducer from './slices/Matches'; // Adjust the path as necessary

const store = configureStore({
    reducer: {
        liveMatches: liveMatchesReducer, // This key should match how you access the state in the component
    },
});

export default store;
