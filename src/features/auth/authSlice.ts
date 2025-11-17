import { createSlice } from '@reduxjs/toolkit'

type AuthState = { loggedIn: boolean }

const LOGGED_KEY = 'mock_logged_in'
const initialState: AuthState = { loggedIn: !!localStorage.getItem(LOGGED_KEY) }

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state) {
            state.loggedIn = true
            localStorage.setItem(LOGGED_KEY, '1')
        },
        logout(state) {
            state.loggedIn = false
            localStorage.removeItem(LOGGED_KEY)
        },
    },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer