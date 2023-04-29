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
import { ProfileScreen } from "../pages/ProfileScreen"
import { SearchUsersPage } from "../pages/SearchUsersPage"
import { startUserData } from "../redux/user.slice"


export const AppRouter = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(startRenew())
        dispatch(startUserData())
    }, [])



    const { looged, checking } = useSelector(state => state.auth)

    if (checking) {
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

            <Route path="/profile/:profileId" element={
                <PrivateRouter logged={looged} >
                    <ProfileScreen />
                </PrivateRouter>}
            />

            <Route path="/search" element={
                <PrivateRouter logged={looged} >
                    <SearchUsersPage />
                </PrivateRouter>}
            />
        </Routes>
    )
}