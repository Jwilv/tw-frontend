import React, { useEffect } from "react"
import { BasicLayout } from "../components/BasicLayout"
import { MenuNotes } from "./MenuNotes"
import { MenuRight } from "../components/MenuRight"
import { useDispatch } from "react-redux"
import { startUserData } from "../redux/user.slice"

export const HomePage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startUserData())
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