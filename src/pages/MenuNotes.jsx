import React from 'react'
import { NotesUser } from '../components/NotesUser'
import { PostNote } from '../components/PostNote'
import { Choice } from '../components/Choice'
import { useSelector } from 'react-redux'

export const MenuNotes = () => {

    const {notes} = useSelector( state => state.notes)
    return (
        <>
            <Choice />
            <div className='MenuNotes-container'>
                <PostNote />
                {
                    notes.map( notes => {
                        return <NotesUser key={notes._id} userId={notes.userRelationId} message={notes.Note.message}/>
                    })
                }
            </div>
        </>
    )
}
