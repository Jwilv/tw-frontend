import React from "react"
import { BasicLayout } from "../components/BasicLayout"
import { MenuNotes } from "./MenuNotes"
import { PostNote } from "../components/PostNote"
import { MenuRight } from "../components/MenuRight"

export const HomePage = () => {
    return (
        <div className="menu-container">
            <BasicLayout >
                <PostNote />
                <MenuNotes />
            </BasicLayout>
            <MenuRight />
        </div>

    )
}