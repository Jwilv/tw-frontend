import React from 'react'
import { ProfileCard } from './ProfileCard'
import { useSelector } from 'react-redux'

export const SearchsProfiles = () => {

    const {} = useSelector( state => state.listUsers)
    return (
        <div className="container-search-users">
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
        </div>
    )
}
