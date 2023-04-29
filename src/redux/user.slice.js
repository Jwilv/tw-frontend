import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    name: "",
    _id: "",
}

const userSlice = createSlice({
    name: "uUser",
    initialState,
    reducers: {
        userData: (state, action) => {
            return {
                ...state,
                ...action.payload,
            }
        }
    }
})

const {userData} = userSlice.actions ;

export const startUserData = ()=>{
    return (dispatch)=>{
        
    }
}

export default userSlice.reducer ;