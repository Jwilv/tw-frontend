import React from 'react'
import { Link } from 'react-router-dom'
export const ProfileCard = ({ id, name, surname }) => {

    return (
        <Link to={`/profile/${id}`} className='link'>

            <div className='card-Profile'>


                <strong>{name} {surname}</strong>

            </div>

        </Link>

    )
}
