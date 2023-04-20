import React from "react"
import { BasicLayout } from "../components/BasicLayout"
import { MenuNotes } from "./MenuNotes"
import { PostNote } from "../components/PostNote"

export const HomePage = () => {
    return (
        <BasicLayout >
            <PostNote />
            <MenuNotes />
        </BasicLayout>
    )
}