import React from 'react'
import { NotesUser } from './NotesUser'
import { PostNote } from './PostNote'
import { ProfileInfo } from './ProfileInfo'
import { useSelector } from 'react-redux'

export const Profile = () => {

const {userNotes} = useSelector( state => state.notes)

    return (
        <div className='profile-container'>
            <ProfileInfo />
            <div className="notes-profile">
                <div className='notes-profile-width'>
                    <PostNote />
                    {
                        userNotes.map( note => {
                            return <NotesUser key={note._id}/>
                        })
                    } 
                </div>
            </div>
        </div>
    )
}
