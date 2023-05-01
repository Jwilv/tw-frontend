import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    userNotes: [],
    notes: [],
    recommended: [],
}

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNotes: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
        deleteNotes : ()=>{
            return initialState
        }
    }
})

export default notesSlice.reducer ;

