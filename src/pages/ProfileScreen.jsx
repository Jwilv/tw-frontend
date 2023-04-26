import React from 'react'
import { useParams } from 'react-router'

export const ProfileScreen = () => {
    const {profileId} = useParams();
    console.log(profileId)
    return (
        <>
        <ProfileInfo /> 
        </>
    )
}
