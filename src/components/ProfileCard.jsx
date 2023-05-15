import React from 'react'
import { Navigate } from 'react-router'
import { Link } from 'react-router-dom'

export const ProfileCard = ({ id, name, surname }) => {

    const handleClickUser = () => {
        <Navigate to={`/profile/${id}`} />
    }
    return (
        <Link to={`/profile/${id}`} className='link'>

            <div className='card-Profile'>
                <img
                    src="https://tse2.mm.bing.net/th?id=OIP.eAevlGw1UR_UqXA_2y-2tAHaHa&pid=Api&P=0"
                    alt="img user"
                    className='img-user'
                />

                <strong>{name} {surname}</strong>

            </div>

        </Link>

    )
}
