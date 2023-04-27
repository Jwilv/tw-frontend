import React from 'react'
import { useParams } from 'react-router'
import { Profile } from '../components/Profile';
import { NavbarLayout } from '../components/NavbarLayout';

export const ProfileScreen = () => {
    const { profileId } = useParams();
    console.log(profileId)
    return (
        <NavbarLayout >
            <Profile />
        </NavbarLayout>
    )
}
