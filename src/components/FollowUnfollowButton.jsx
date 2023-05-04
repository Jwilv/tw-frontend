import React from 'react'

export const FollowUnfollowButton = () => {
    return (
        <div>
            {
                (false)
                    ? <button className='button-profile follow'>Follow</button>
                    : <button className='button-profile unfollow'>Unfollow</button>
            }
        </div>
    )
}
