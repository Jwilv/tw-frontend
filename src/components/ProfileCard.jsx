import React from 'react'
import { Link } from 'react-router-dom'
import { ImgProfileCard } from './ImgProfileCard'
export const ProfileCard = ({ id, name, surname }) => {

    return (
        <Link to={`/profile/${id}`} className='link'>

            <div className='card-Profile'>

<ImgProfileCard id={id}/>
                <strong>{name} {surname}</strong>

            </div>

        </Link>

    )
}
