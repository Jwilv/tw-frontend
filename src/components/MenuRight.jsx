import React from 'react'
import { NotesUser } from './NotesUser'
import { UserRecommended } from './UserRecommended'

export const MenuRight = () => {
    return (
        <div className='menu-container-right'>
            <div className='menu-container-right-items'>
                <UserRecommended />
            </div>

            <div className='menu-container-right-items'>
                <NotesUser />
                <NotesUser />
                <NotesUser />
            </div>

        </div>
    )
}
