import React from "react"
import { Route, Routes } from "react-router"
import { HomePage } from "../pages/HomePage"
import { LoginPage } from "../pages/LoginPage"
import { Registerpage } from "../pages/RegisterPage"


export const AppRouter = ()=>{
    return(
        <Routes>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/register" element={<Registerpage />} /> 
        </Routes>
    )
}