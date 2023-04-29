import React from 'react'
import { useParams } from 'react-router'
import { Profile } from '../components/Profile';
import { NavbarLayout } from '../components/NavbarLayout';
import { getUserById } from '../helpers/getUserbyId';

export const ProfileScreen = () => {
    const { profileId } = useParams();
    const resolver =async ()=>{
        const res = await getUserById(profileId)
        console.log( res)
    }

    resolver()
    
    return (
        <NavbarLayout >
            <Profile />
        </NavbarLayout>
    )
}
