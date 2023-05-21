import React from 'react'
import { useSelector } from 'react-redux'

export const FollowUnfollowButton = () => {

    const {buttonFollow} = useSelector( state => state.ui)
    return (
        <div>
            {
                (buttonFollow)
                    ? <button className='button-profile unfollow'>Unfollow</button>
                    : <button className='button-profile follow'>Follow</button>
            }
        </div>
    )
}
