import React from 'react'
import { useParams } from 'react-router'
import { ProfileInfo } from '../components/ProfileInfo';

export const ProfileScreen = () => {
    const {profileId} = useParams();
    console.log(profileId)
    return (
        <>
        <ProfileInfo /> 
        </>
    )
}
