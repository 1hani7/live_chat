import { createSlice } from '@reduxjs/toolkit';

interface initial{
    newFSearch: string;
    nowFSearch: string;
}

const initial:initial = {
    newFSearch: '',
    nowFSearch: '',
}

const SearchFriendSlice = createSlice({
    name: 'isLogin',
    initialState: initial,
    reducers: {
        newFSVal: (state, action) => {
            state.newFSearch = action.payload;
        },
        nowFSVal: (state, action) => {
            state.nowFSearch = action.payload;
        }
    }
});

export default SearchFriendSlice;
export const { newFSVal, nowFSVal } = SearchFriendSlice.actions;