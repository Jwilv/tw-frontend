import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { Profile } from '../components/Profile';
import { NavbarLayout } from '../components/NavbarLayout';
import { useDispatch } from 'react-redux';
import { startDataProfile } from '../redux/profile.slice';
import { startUploadUserNotes } from '../redux/notes.slice';

export const ProfileScreen = () => {

    const { profileId } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startDataProfile(profileId))
    }, [])

    useEffect(() => {
        setTimeout(() => { dispatch(startUploadUserNotes(1)) }, 200)
    }, [])


    return (
        <NavbarLayout >
            <Profile />
        </NavbarLayout>
    )
}
