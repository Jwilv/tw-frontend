import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router"
import { HomePage } from "../pages/HomePage"
import { LoginPage } from "../pages/LoginPage"
import { Registerpage } from "../pages/RegisterPage"
import { verifyToken } from "../helpers/verifyToken"


export const AppRouter = () => {
    const token = localStorage.getItem("token")
    const initialState = verifyToken(token)
    const [tokenState, setTokenState] = useState(initialState)

    useEffect(() => {
        setTokenState(verifyToken(tokenState))
    }, [])

    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Registerpage />} />
        </Routes>
    )
}