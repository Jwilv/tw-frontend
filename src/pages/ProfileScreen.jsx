import React from 'react'
import { useParams } from 'react-router'
import { ProfileInfo } from '../components/ProfileInfo';
import { PostNote } from '../components/PostNote';
import { NotesUser } from '../components/NotesUser';

export const ProfileScreen = () => {
    const { profileId } = useParams();
    console.log(profileId)
    return (
        <>
            <ProfileInfo />
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
