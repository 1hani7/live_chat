import { configureStore } from '@reduxjs/toolkit';
import LoginStatus from '../features/LoginSlice';

export const store = configureStore({
    reducer: {
        Login: LoginStatus.reducer,
    },
})