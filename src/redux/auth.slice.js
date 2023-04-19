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

const {login,logout,checkingFinish} = authSlice.actions;

export const startLogin = ({email,password})=>{
return async(dispatch)=>{
    const auth = await fetchWithoToken('login', {email, password} , 'POST')
    localStorage.setItem('token', auth.token)
    dispatch(login({checking : false }))
}
}

export default authSlice.reducer;