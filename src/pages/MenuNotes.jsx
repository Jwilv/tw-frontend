import React from 'react'
import { NotesUser } from '../components/NotesUser'
import { PostNote } from '../components/PostNote'
import { Choice } from '../components/Choice'

export const MenuNotes = () => {
    return (
        <>
            <Choice />
            <div className='MenuNotes-container'>
                <PostNote />
                <NotesUser />
                <NotesUser />
                <NotesUser />
                <NotesUser />
                <NotesUser />
                <NotesUser />
                <NotesUser />
                <NotesUser />
                <NotesUser />
                <NotesUser />
                <NotesUser />
                <NotesUser />
                <NotesUser />
                <NotesUser />
                <NotesUser />
                <NotesUser />
                <NotesUser />
            </div>
        </>
    )
}
