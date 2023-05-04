import React from 'react'

export const FollowUnfollowButton = () => {
    return (
        <div>
            {
                (true)
                    ? <button>Seguir</button>
                    : <button>Dejar de Seguir</button>
            }
        </div>
    )
}
