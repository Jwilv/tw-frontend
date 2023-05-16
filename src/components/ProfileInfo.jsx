import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { FollowUnfollowButton } from './FollowUnfollowButton';
import { Link } from 'react-router-dom';
import { BannerProfile } from './BannerProfile';

export const ProfileInfo = () => {

    const {
        name,
        surname,
        biography,
        location,
        birthDate,
    } = useSelector(state => state.ProfileActive);

    const { profileId } = useParams();

    const HOST = 'http://localhost:8080'

    const URL_AVATAR = `${HOST}/getAvatar?id=${profileId}`;


    return (
        <div className='container-profileinfo'>
            <div className="profileinfo-user">
                <BannerProfile id={profileId}/>
                <div className="info">

                    <div className="img-profile">
                        <img src={URL_AVATAR}
                            alt="avatar"
                        />
                    </div>

                    <div className="change">
                        {
                            (true)
                                ? <Link to={"/changeProfile"}><i className="fa-solid fa-user-pen" style={{ color: "#ffffff", }} /></Link>
                                : <FollowUnfollowButton />
                        }
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
