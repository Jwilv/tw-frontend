import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { Profile } from '../components/Profile';
import { NavbarLayout } from '../components/NavbarLayout';
import { useDispatch } from 'react-redux';
import { startDataProfile } from '../redux/profile.slice';
import { startUploadUserNotes } from '../redux/notes.slice';
export const ProfileScreen =  () => {

    const { profileId } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startDataProfile(profileId))
    }, [])

    useEffect(() => {
        dispatch(startUploadUserNotes(profileId,1))
    }, [])


    return (
        <NavbarLayout >
            <Profile />
        </NavbarLayout>
    )
}
