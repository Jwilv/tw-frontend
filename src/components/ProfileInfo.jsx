import React from 'react'
import { useSelector } from 'react-redux'

export const ProfileInfo = () => {

    const {
        name,
        surname,
        id,
        biography,
        location,
        birthDate,
    } = useSelector(state => state.ProfileActive);

    const host = 'http://localhost:8080'

    const urlAvatar = `${host}/getAvatar?id=${id}`;

    const urlBanner = `${host}/getBanner?id=${id}`;


    return (
        <div className='container-profileinfo'>
            <div className="profileinfo-user">
                <div className="banner">
                    <img src={urlBanner}
                        alt="banner"
                        className='banner-img'
                    />
                </div>

                <div className="info">

                    <div className="img-profile">
                        <img src={urlAvatar}
                            alt="avatar"
                        />
                    </div>

                    <div className="container-bio-name">

                        <div className="name-profile">
                            <strong>{name} <strong>{surname}</strong> </strong>
                            {
                                (location)
                                    ?
                                    <p> <i className="fa-solid fa-location-dot" style={{ color: "#ffffff", }} />{location}</p>
                                    : null
                            }
                        </div>

                        <div className="bio-profile">

                            {
                                (birthDate)
                                    ?
                                    <p className='date'><i className="fa-solid fa-calendar" style={{ color: "#ffffff", }} />{birthDate}</p>
                                    : null
                            }
                            <p>{biography}</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
