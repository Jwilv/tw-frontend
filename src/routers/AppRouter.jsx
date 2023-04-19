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
    let initialState = verifyToken(token)
    console.log(initialState)
    const [statusToken, setStatusToken] = useState(initialState)
    useEffect(() => {
        setStatusToken(verifyToken(token))
    }, [])




    return (
        <Routes>
            <Route path="/home" element={
                <PrivateRouter logged={statusToken}>
                    <HomePage />
                </PrivateRouter>}
            />

            <Route path="/login" element={
                <PublicRouter logged={statusToken} >
                    <LoginPage />
                </PublicRouter>}
            />

            <Route path="/register" element={
                <PublicRouter logged={statusToken} >
                    <Registerpage />
                </PublicRouter>}
            />
        </Routes>
    )
}