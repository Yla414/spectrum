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
    reducers: {}
})
