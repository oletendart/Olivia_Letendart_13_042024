import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getLoginData, getLoginFetchData } from './API-Data.js';

export const loginUser = createAsyncThunk('/login', async ({ email, password }, thunkAPI) => {
    try {
        const response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        const loginData = getLoginData(data);

        if (!response.ok) {
            return thunkAPI.rejectWithValue(loginData.message || 'Login failed');
        }

        console.log('token avant avoir mis dans localstorage: ', loginData.token);
        localStorage.setItem('token', loginData.token);

        return loginData;
    } catch (error) {
        return thunkAPI.rejectWithValue('Network error');
    }
});

export const getUserProfile = async () => {
    try {
        const token = localStorage.getItem('token');
        console.log('token après avoir mis dans localStorage', token);

        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            }
        });

        const data = await response.json();
        const profileData = getLoginFetchData(data);

        if (!response.ok) {
            throw new Error(profileData.message || 'Failed to fetch user profile');
        }

        console.log('getUserProfile: ', profileData);
        return profileData;
    } catch (error) {
        console.error('Fetch error: ', error);
        return { status: 'error', message: error.message };
    }
};


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLoading: false,
        error: null,
    },
    reducers: {
        logout(state) {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
