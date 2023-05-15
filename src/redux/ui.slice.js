import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    suggestions: false,
    home: true,
    follow:true,
    new:false,
}
const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        openMenu: (state) => {
            return {
                ...state,
                suggestions: false,
                home: true,
            }
        },
        openSuggestions: (state) => {
            return {
                ...state,
                suggestions: true,
                home: false,
            }
        },
        openFollow : (state)=>{
            return{
                ...state,
                follow:true,
                new:false,
            }
        },
        openNew: (state)=>{
            return{
                ...state,
                follow:false,
                new:true,
            }
        }
    }
})

export const { openMenu, openSuggestions, openFollow, openNew } = uiSlice.actions

export default uiSlice.reducer;