import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { Profile } from '../components/Profile';
import { NavbarLayout } from '../components/NavbarLayout';
import { useDispatch } from 'react-redux';
import { deleteProfileData, startDataProfile } from '../redux/profile.slice';
import {deleteNotesUser, startUploadUserNotes } from '../redux/notes.slice';
export const ProfileScreen = () => {

    const { profileId } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startDataProfile(profileId))
        return () => {
            dispatch(deleteNotesUser())
            dispatch(deleteProfileData())
        }
    }, [])

    useEffect(() => {
        dispatch(startUploadUserNotes(profileId, 1))
        return () => {
            dispatch(deleteNotesUser())
            dispatch(deleteProfileData())
        }
    }, [])


    return (
        <NavbarLayout >
            <Profile />
        </NavbarLayout>
    )
}
