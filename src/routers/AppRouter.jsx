import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router"
import { HomePage } from "../pages/HomePage"
import { LoginPage } from "../pages/LoginPage"
import { Registerpage } from "../pages/RegisterPage"
import { verifyToken } from "../helpers/verifyToken"
import { PrivateRouter } from "./PrivateRouter"
import { PublicRouter } from "./PublicRouter"
import { useSelector } from "react-redux"


export const AppRouter = () => {
    const token = localStorage.getItem("token")
    let initialState = verifyToken(token)
    console.log(initialState)
    const [statusToken, setStatusToken] = useState(initialState)
    useEffect(() => {
        setStatusToken(verifyToken(token))
    }, [])

    const {looged} = useSelector(state => state.auth)

    return (
        <Routes>
            <Route path="/home" element={
                <PrivateRouter logged={looged}>
                    <HomePage />
                </PrivateRouter>}
            />

            <Route path="/login" element={
                <PublicRouter logged={looged} >
                    <LoginPage />
                </PublicRouter>}
            />

            <Route path="/register" element={
                <PublicRouter logged={looged} >
                    <Registerpage />
                </PublicRouter>}
            />
        </Routes>
    )
}