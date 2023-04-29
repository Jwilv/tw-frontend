import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth.slice"
import uiReducer from "./ui.slice"
import userReducer from "./user.slice"



export const store = configureStore({
    reducer: {
        auth: authReducer,
        ui : uiReducer,
        user : userReducer,
    }
})