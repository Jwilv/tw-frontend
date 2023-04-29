import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { Profile } from '../components/Profile';
import { NavbarLayout } from '../components/NavbarLayout';
import { getUserById } from '../helpers/getUserbyId';
import { useDispatch } from 'react-redux';
import { startDataProfile } from '../redux/profile.slice';

export const ProfileScreen = () => {

    const { profileId } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(startDataProfile(profileId))
    }, [])
    
    
    return (
        <NavbarLayout >
            <Profile />
        </NavbarLayout>
    )
}
