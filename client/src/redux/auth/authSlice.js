import { createSlice } from '@reduxjs/toolkit';
import api from '../../api';

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = !!action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        resetAuth: (state, action) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        }
    }
});

export 
