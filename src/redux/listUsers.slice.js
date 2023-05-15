import { createSlice } from "@reduxjs/toolkit"
import { fetchToken } from "../helpers/fecht";


const initialState = {
    searchUsers: [],
};

const listUsersSlice = createSlice({
    name: "listUsers",
    initialState,
    reducers:{
        addSearchUsers : (state,action)=>{
            return{
                ...state,
                searchUsers : [...action.payload],
            }
        },
        deleteSearchUsers : (state)=>{
            return{
                ...state,
                searchUsers:[],
            }
        },
    }
});

const {addSearchUsers, deleteSearchUsers} = listUsersSlice.actions;

export const startAddUsersInList = (page = 1, type = 'new',search = '')=>{
    return async(dispatch)=>{
        try {
            dispatch(deleteSearchUsers())
            const resp = await fetchToken(`getUsers?page=${page}&type=${type}&search=${search}`)
            dispatch(addSearchUsers([...resp]))
        } catch (error) {
            console.log(error)
        }
        
    }
}

export default listUsersSlice.reducer;