import { createSlice } from "@reduxjs/toolkit";
import { fetchToken, fetchWithoToken } from "../helpers/fecht";

const initialState = {
    name: "",
    uid: "",
    checking: true,
    looged: false,
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            return {
                ...state,
                checking: false,
                ...action.payload,
            }
        },

        logout: () => {
            return {
                initialState
            }
        },
        checkingFinish: (state) => {
            return {
                ...state,
                checking: false
            }
        },
    }
})

const { login, logout, checkingFinish } = authSlice.actions;

export const startLogin = ({ email, password }) => {
    return async (dispatch) => {
        try {
            const { token } = await fetchWithoToken('login', { email, password }, 'POST')
            localStorage.setItem('token', token)
            dispatch(login({
                checking: false,
                looged: true,
            }))
            return true
        } catch (error) {
            console.log("malio sal")
            return false
        }
    }
}

export const startRegister = (data) => {
    return async (dispatch) => {
        try {
            const { token } = await fetchWithoToken('register', data , 'POST')
            localStorage.setItem('token', token)
            dispatch(login({
                checking: false,
                looged: true,
            }))
            return true
        } catch (error) {
            console.log("malio sal")
            return false
        }
    }
}

export const startRenew = (data) => {
    return async (dispatch) => {
        try {
            const { token } = await fetchToken('renew', data )
            localStorage.setItem('token', token)
            dispatch(login({
                checking: false,
                looged: true,
            }))
            return true
        } catch (error) {
            console.log("malio sal")
            return false
        }
    }
}

export default authSlice.reducer;