import React from 'react'
import { ProfileCard } from './ProfileCard'
import { useSelector } from 'react-redux'

export const SearchsProfiles = () => {

    const { searchUsers } = useSelector(state => state.listUsers)
    return (
        <div className="container-search-users">
            {searchUsers.map((user) => {
                return <ProfileCard  key={user.id}/> 
            })}
        </div>
    )
}
