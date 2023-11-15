import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

interface LoginInit {
    loginNow:boolean;
    memberNow:boolean;
    guestNow:boolean;
}

const initialState:LoginInit = {
    loginNow:false,
    memberNow:false,
    guestNow:false,
}

const LoginStatus = createSlice({
    name: 'isLogin',
    initialState: initialState,
    reducers: {
        loginPass:(state, action) => {
            state.loginNow = true;
        },
        memberPass:(state, action) => {
            state.memberNow = true;
        },
        guestPass:(state, action) => {
            state.guestNow = true;
        },
    }
});

export default LoginStatus;
export const { loginPass, memberPass, guestPass } = LoginStatus.actions;