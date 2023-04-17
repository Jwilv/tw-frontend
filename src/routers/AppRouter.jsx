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
    const [tokenState, setTokenState] = useState(initialState)

    useEffect(() => {
        setTokenState(verifyToken(tokenState))
    }, [])

    return (
        <Routes>
            <Route path="/home" element={
                <PrivateRouter>
                    <HomePage />
                </PrivateRouter>}
            />

            <Route path="/login" element={
                <PublicRouter >
                    <LoginPage />
                </PublicRouter>}
            />

            <Route path="/register" element={
                <PublicRouter >
                    <Registerpage />
                </PublicRouter>}
            />
        </Routes>
    )
}