import { createSlice } from '@reduxjs/toolkit';

interface initial{
    newFSearch: string;
    nowFSearch: string;
    isChanged: boolean;
}

const initial:initial = {
    newFSearch: '',
    nowFSearch: '',
    isChanged: false,
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
        },
        reFreshToggle: (state) => {
            state.isChanged = !(state.isChanged);
        }
    }
});

export default SearchFriendSlice;
export const { newFSVal, nowFSVal, reFreshToggle, } = SearchFriendSlice.actions;