import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { Profile } from '../components/Profile';
import { NavbarLayout } from '../components/NavbarLayout';
import { useDispatch } from 'react-redux';
import { startDataProfile } from '../redux/profile.slice';
import {deleteNotesUser, startUploadUserNotes } from '../redux/notes.slice';
export const ProfileScreen = () => {

    const { profileId } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startDataProfile(profileId))
        return () => {
            dispatch(deleteNotesUser())
        }
    }, [])

    useEffect(() => {
        dispatch(startUploadUserNotes(profileId, 1))
        return () => {
            dispatch(deleteNotesUser())
        }
    }, [])


    return (
        <NavbarLayout >
            <Profile />
        </NavbarLayout>
    )
}
