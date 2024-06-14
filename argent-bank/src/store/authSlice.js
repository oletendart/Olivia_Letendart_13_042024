import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {  getLoginFetchData } from './API-Data.js';

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({email, password}, { rejectWithValue }) => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email, password}),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to log in');
            }

            // Store the token in localStorage or handle it as needed
            localStorage.setItem('token', data.body.token);

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getUserProfile = async () => {
    try {
        const token = localStorage.getItem('token');
        console.log('token après avoir mis dans localStorage', token);

        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });

        const data = await response.json();
        console.log(data);
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
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
