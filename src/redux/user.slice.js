import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    name: "",
    _id: "",
}

const userSlice = createSlice({
    name: uUser,
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

export const {userData} = userSlice.actions ;

export default userSlice.reducer ;