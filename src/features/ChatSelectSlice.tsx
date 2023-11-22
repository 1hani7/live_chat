import { createSlice } from '@reduxjs/toolkit';

interface init{
    chatRoom: string;
    uid: string;
    name: string;
}

const init:init = {
    chatRoom: '',
    uid: '',
    name: '',
}

const ChatSelectSlice = createSlice({
    name: 'ChatSelect',
    initialState: init,
    reducers:{
        nowChat: (state, action) => {
            state.chatRoom = action.payload;
        },
        nowUid: (state, action) => {
            state.uid = action.payload;
        },
        nowName: (state, action) => {
            state.name = action.payload;
        }
    }
});

export default ChatSelectSlice;
export const { nowChat, nowUid, nowName } = ChatSelectSlice.actions;