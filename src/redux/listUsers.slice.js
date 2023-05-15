import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    searchUsers: [],
};

const listUsersSlice = createSlice({
    name:listUsers,
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

export default listUsersSlice.reducer;