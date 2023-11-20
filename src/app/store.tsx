import { configureStore } from '@reduxjs/toolkit';
import SearchFriendSlice from '../features/SearchFriendSlice';

export const store = configureStore({
    reducer: {
        SearchFriend: SearchFriendSlice.reducer,
    },
})