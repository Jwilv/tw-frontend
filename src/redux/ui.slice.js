import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Suggestions: false,
}
const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        ChangeMenuNotes: (state) => {
            return {
                ...state,
                Suggestions : !state.Suggestions,
            }
        }
    }
})