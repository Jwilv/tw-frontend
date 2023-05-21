import { createSlice } from "@reduxjs/toolkit";
import { fetchToken } from "../helpers/fecht";

const initialState = {
    suggestions: false,
    home: true,
    follow: true,
    new: false,
    buttonFollow: false,
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
        openFollow: (state) => {
            return {
                ...state,
                follow: true,
                new: false,
            }
        },
        openNew: (state) => {
            return {
                ...state,
                follow: false,
                new: true,
            }
        },
        setButtonFollow: (state, action) => {
            return {
                ...state,
                buttonFollow : action.payload,
            }
        }
    }
})

export const { openMenu, openSuggestions, openFollow, openNew } = uiSlice.actions

export const startDatafollow = (id) => {

    return async (dispatch) => {
        try {
            fetchToken(`checkRelation?id=${id}`)
                .then(() => { dispatch() })
                .catch(() => { dispatch() })
        } catch (error) {

        }
    }
}

export default uiSlice.reducer;