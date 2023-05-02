import { createSlice } from "@reduxjs/toolkit"
import { fetchToken } from "../helpers/fecht"


const initialState = {
    userNotes: {},
    notes: {},
    recommended: {},
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
        deleteNotes: () => {
            return initialState
        }
    }
})

const { addNotes, deleteNotes } = notesSlice.actions;

export const startUploadUserNotes = (page) => {
    return async (dispatch, getState) => {

        const { id } = getState().ProfileActive;
        try {
            const res = await fetchToken(`getNotes?id=${id}&page=${page}`)
            console.log(res)
            dispatch(addNotes({userNotes : {...res}}))
        } catch (error) {

        }
    }
}

export default notesSlice.reducer;

