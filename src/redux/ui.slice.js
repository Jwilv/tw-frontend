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
        openFollow : ()=>{
            return{
                ...state,
                follow:true,
                new:false,
            }
        },
        openNew: ()=>{
            return{
                ...state,
                new:true,
                follow:false,
            }
        }
    }
})

export const { openMenu, openSuggestions } = uiSlice.actions

export default uiSlice.reducer;