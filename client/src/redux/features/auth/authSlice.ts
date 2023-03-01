import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AuthState, User } from './types'
import { ApiService } from '../../../services'
import { setLocalStorage } from '../../../utils/storage'


const initialState: AuthState = {
    user: null,
    token: '',
    isLoading: false,
    statusMessage: ''
};

export const registerUser = createAsyncThunk(
    'auth/register',
    async ({username, password}: User) => {
        const data = await ApiService.registerUser(username, password)
        if(data.token) {
            setLocalStorage('TOKEN', data.token)
        }
        return data
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.statusMessage = payload.message
                state.user = payload.user
                state.token = payload.token
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false
                // @ts-ignore
                //state.statusMessage = action.payload.message
            })
    }
})


export const {} = authSlice.actions
export default authSlice.reducer