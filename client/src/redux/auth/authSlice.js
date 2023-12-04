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

export const { setUser, setToken, resetAuth } = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;

export const register = (userData) => async (dispatch) => {
    try {
        const response = await api.post('http://localhost:5000/auth/register', userData);
        console.log(response.data.message);
    } catch (error) {
        console.error('Registration failed!:', error);
    }
}

export const login = (credentials) => async (dispatch) => {
    try {
        const response = await api.post('http://local')
    } catch (error) {
        
    }
}