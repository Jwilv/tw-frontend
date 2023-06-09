import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { FollowUnfollowButton } from './FollowUnfollowButton';
import { Link } from 'react-router-dom';
import { BannerProfile } from './BannerProfile';
import { AvatarProfile } from './AvatarProfile';

export const ProfileInfo = () => {

    const {
        name,
        surname,
        biography,
        location,
    } = useSelector(state => state.ProfileActive);

    const { profileId } = useParams();
    const {_id} = useSelector( state => state.user)

    return (
        <div className='container-profileinfo'>
            <div className="profileinfo-user">
                <BannerProfile id={profileId} />
                <div className="info">

                    <AvatarProfile id={profileId}/>

                    <div className="change">
                        {
                            (profileId === _id)
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

                            <p>{biography}</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
