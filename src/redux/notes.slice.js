import { createSlice } from "@reduxjs/toolkit"
import { fetchToken } from "../helpers/fecht"


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
        deleteNotesUser: (state) => {
            return {
                ...state,
                userNotes:[],
            }
        },
        addNotesRecommended:(state, action)=>{
            return{
                ...state,
                recommended:[...action.payload]
            }
        }
    }
})

export const { addNotes, deleteNotesUser, addNotesRecommended} = notesSlice.actions;

export const startUploadUserNotes = (id,page) => {
    return async (dispatch) => {
        console.log("estoy aca")
        try {
            const res = await fetchToken(`getNotes?id=${id}&page=${page}`)
            console.log(res)
            dispatch(addNotes({userNotes : [...res]}))
        } catch (error) {

        }
    }
}

export const startPostNote = (payload)=>{
    return async(dispatch,state)=>{
 try {
    await fetchToken("saveNote",payload,"POST")
 } catch (error) {
    
 }
    }
}

export const startAddNotesRecommended = ()=>{
    return async(dispatch)=>{
        await fetchToken("notesrandom")
        .then( data =>{
            dispatch(addNotesRecommended(data))
        })
    }
}

export default notesSlice.reducer;

