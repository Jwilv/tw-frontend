import React from 'react'
import { NotesUser } from './NotesUser'
import { PostNote } from './PostNote'
import { ProfileInfo } from './ProfileInfo'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

export const Profile = () => {

    const { profileId } = useParams();


const {userNotes} = useSelector( state => state.notes)

    return (
        <div className='profile-container'>
            <ProfileInfo />
            <div className="notes-profile">
                <div className='notes-profile-width'>
                    <PostNote />
                    {
                        userNotes.map( note => {
                            return <NotesUser userId={profileId}{...note} key={note._id}/>
                        })
                    } 
                </div>
            </div>
        </div>
    )
}
