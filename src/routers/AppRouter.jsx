import React, { useEffect } from "react"
import { Route, Routes } from "react-router"
import { HomePage } from "../pages/HomePage"
import { LoginPage } from "../pages/LoginPage"
import { Registerpage } from "../pages/RegisterPage"
import { PrivateRouter } from "./PrivateRouter"
import { PublicRouter } from "./PublicRouter"
import { useDispatch, useSelector } from "react-redux"
import { startRenew } from "../redux/auth.slice"
import { Spinner } from "../pages/Spinner"


export const AppRouter = () => {
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(startRenew())
    }, [])

    const {looged, checking} = useSelector(state => state.auth)

    if (true){
        return (<Spinner />)
    }

    return (
        <Routes>
            <Route path="/" element={
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