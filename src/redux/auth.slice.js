import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    uid: "",
    checking: true,
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

const {login,logout,checkingFinish} = authSlice.actions