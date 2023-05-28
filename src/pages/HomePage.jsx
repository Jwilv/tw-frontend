import React, { useEffect } from "react"
import { BasicLayout } from "../components/BasicLayout"
import { MenuNotes } from "./MenuNotes"
import { MenuRight } from "../components/MenuRight"
import { useDispatch } from "react-redux"
import { startUserData } from "../redux/user.slice"
import { startAddRecommendedUsers } from "../redux/listUsers.slice"
import { startAddNotesRecommended } from "../redux/notes.slice"

export const HomePage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startUserData())
        dispatch(startAddRecommendedUsers())
        dispatch(startAddNotesRecommended())
    }, [])
    
    return (
        <div className="menu-container">
            <BasicLayout >
                <MenuNotes />
            </BasicLayout>
            <MenuRight />
        </div>

    )
}