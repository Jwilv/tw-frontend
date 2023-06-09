import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { startCreationRelation, startDeleteRelation } from '../redux/ui.slice';

export const FollowUnfollowButton = () => {

    const { profileId } = useParams();

    const dispatch = useDispatch();

    const { buttonFollow } = useSelector(state => state.ui)

    const handleUnfollow = () => {
        dispatch(startDeleteRelation(profileId))
    }

    const handleFollow = () => {
        dispatch(startCreationRelation(profileId))
    }
    
    return (
        <div>
            {
                (buttonFollow)
                    ? <button
                        className='button-profile unfollow'
                        onClick={handleUnfollow}
                    >Unfollow
                    </button>
                    : <button
                        className='button-profile follow'
                        onClick={handleFollow}
                    >Follow
                    </button>
            }
        </div>
    )
}
