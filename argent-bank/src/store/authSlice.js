import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk('auth/loginUser', async ({username, password}, thunkAPI) => {
    // Remplacez par mon API
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({username, password}),
    });

    if (!response.ok) {
        const data = await response.json();
        return data;
    } else {
        return thunkAPI.rejectWithValue('Login failed');
    }
})

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
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;