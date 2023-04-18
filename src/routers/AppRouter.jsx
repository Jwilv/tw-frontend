import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router"
import { HomePage } from "../pages/HomePage"
import { LoginPage } from "../pages/LoginPage"
import { Registerpage } from "../pages/RegisterPage"
import { verifyToken } from "../helpers/verifyToken"
import { PrivateRouter } from "./PrivateRouter"
import { PublicRouter } from "./PublicRouter"


export const AppRouter = () => {
    const token = localStorage.getItem("token")
    const initialState = verifyToken(token)
    console.log(initialState)



    return (
        <Routes>
            <Route path="/home" element={
                <PrivateRouter logged={initialState}>
                    <HomePage />
                </PrivateRouter>}
            />

            <Route path="/login" element={
                <PublicRouter logged={initialState} >
                    <LoginPage />
                </PublicRouter>}
            />

            <Route path="/register" element={
                <PublicRouter logged={initialState} >
                    <Registerpage />
                </PublicRouter>}
            />
        </Routes>
    )
}