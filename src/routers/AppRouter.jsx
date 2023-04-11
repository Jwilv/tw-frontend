import React from "react"
import { Route, Routes } from "react-router"
import { HomePage } from "../pages/HomePage"
import { SignInSignUp } from "../pages/SignInSignUp"


export const AppRouter = ()=>{
    return(
        <Routes>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/login" element={<SignInSignUp />} /> 
        </Routes>
    )
}