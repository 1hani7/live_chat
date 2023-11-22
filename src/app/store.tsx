import { configureStore } from '@reduxjs/toolkit';
import SearchFriendSlice from '../features/SearchFriendSlice';
import ChatSelectSlice from '../features/ChatSelectSlice';

export const store = configureStore({
    reducer: {
        SearchFriend: SearchFriendSlice.reducer,
        ChatSelect: ChatSelectSlice.reducer,
    },
})