import React from 'react'
import { ImgNoteUser } from './ImgNoteUser'

export const UserRecommended = ({ id, name, surname }) => {
    return (
        <div className='menu-right-user'>
            <div className="menu-right-user-img">
                <ImgNoteUser id={id} />
            </div>

            <div className="menu-right-user-name">
                <p>{name} {surname}</p>
            </div>
        </div>
    )
}
