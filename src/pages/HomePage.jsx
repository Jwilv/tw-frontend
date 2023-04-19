import React from "react"
import { BasicLayout } from "../components/BasicLayout"
import { MenuNotes } from "./MenuNotes"

export const HomePage = () => {
    return (
        <BasicLayout >
            <MenuNotes />
        </BasicLayout>
    )
}