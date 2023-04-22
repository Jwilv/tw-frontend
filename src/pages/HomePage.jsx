import React from "react"
import { BasicLayout } from "../components/BasicLayout"
import { MenuNotes } from "./MenuNotes"
import { MenuRight } from "../components/MenuRight"

export const HomePage = () => {
    return (
        <div className="menu-container">
            <BasicLayout >
                <MenuNotes />
            </BasicLayout>
            <MenuRight />
        </div>

    )
}