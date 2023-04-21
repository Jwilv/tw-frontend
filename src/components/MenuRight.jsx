import React from 'react'
import { NotesUser } from './NotesUser'
import { UserRecommended } from './UserRecommended'

export const MenuRight = () => {
    return (
        <div className='menu-container-right'>
            <div className='menu-container-right-items-user'>
                <p className="menu-container-right-title"> Usuarios recomendados: </p>
                <UserRecommended />
                <UserRecommended />
                <UserRecommended />
                <UserRecommended />
            </div>

            <div className='menu-container-right-items'>
                <p className="menu-container-right-title-notes"> Publicaciones recomendados: </p>
                <div className='menu-container-right-notes'>
                    <NotesUser />
                    <NotesUser />
                    <NotesUser />
                </div>

            </div>

        </div>
    )
}
