import { createSlice } from "@reduxjs/toolkit"
import { fetchToken } from "../helpers/fecht";


const initialState = {
    searchUsers: [],
    recommended:[],
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
        addRecommended : (state, action)=>{
            return{
                ...state,
                recommended : [...action.payload],
            }
        },
    }
});

const {addSearchUsers, deleteSearchUsers, addRecommended} = listUsersSlice.actions;

export const startAddUsersInList = (page = 1, type = 'new',search = '')=>{
    return async(dispatch, getState)=>{

        const { _id } = getState().user;
        try {
            dispatch(deleteSearchUsers())
            const resp = await fetchToken(`getUsers?page=${page}&type=${type}&search=${search}`)
            const filterUsers = resp.filter( user=> user.id !== _id)
            dispatch(addSearchUsers([...filterUsers]))
        } catch (error) {
            console.log(error)
        }
        
    }
}

export default listUsersSlice.reducer;