import React from 'react'
import { NotesUser } from '../components/NotesUser'
import { PostNote } from '../components/PostNote'
import { Choice } from '../components/Choice'
import { useSelector } from 'react-redux'

export const MenuNotes = () => {

    const { notes } = useSelector(state => state.notes)
    const { home } = useSelector(state => state.ui)

    return (
        <>
            <Choice />
            <div className='MenuNotes-container'>
                <PostNote />
                {

                    (home)
                        ? notes.map(notes => {
                            return <NotesUser key={notes._id} userId={notes.userRelationId} {...notes.Note} />
                        })
                        : notes.map(notes => {
                            return <NotesUser key={notes._id} {...notes} />

                        })
                }
            </div>
        </>
    )
}
