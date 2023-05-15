import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth.slice"
import uiReducer from "./ui.slice"
import userReducer from "./user.slice"
import profileReducer from "./profile.slice"
import notesReducer from "./notes.slice"
import listUsersReducer from './listUsers.slice'



export const store = configureStore({
    reducer: {
        auth: authReducer,
        ui : uiReducer,
        user : userReducer,
        ProfileActive : profileReducer,
        notes : notesReducer,
        listUsers : listUsersReducer,
    }
})