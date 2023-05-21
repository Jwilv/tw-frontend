import React, { useEffect } from 'react'
import { NotesUser } from './NotesUser'
import { PostNote } from './PostNote'
import { ProfileInfo } from './ProfileInfo'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { startDatafollow } from '../redux/ui.slice'

export const Profile = () => {

    const dispatch = useDispatch()

    const { profileId } = useParams();

    useEffect(() => {
        dispatch(startDatafollow(profileId))
    }, [])
    

    const { userNotes } = useSelector(state => state.notes)

    const {_id : id } = useSelector(state => state.user)

    return (
        <div className='profile-container'>
            <ProfileInfo />
            <div className="notes-profile">
                <div className='notes-profile-width'>
                    {
                        (profileId === id)
                            ? <PostNote />
                            : <></>
                    }
                    {
                        userNotes.map(note => {
                            return <NotesUser userId={profileId}{...note} key={note._id} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
