import React, { useState } from 'react'

export const AvatarProfile = ({ id }) => {
    const defaultAvatar = "https://tse2.mm.bing.net/th?id=OIP.eAevlGw1UR_UqXA_2y-2tAHaHa&pid=Api&P=0";

    const HOST = 'http://localhost:8080'

    const URL_AVATAR = `${HOST}/getAvatar?id=${id}`;

    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    return (

        <>
            {(imageError)
                ?
                (<div className="img-profile">
                    <img src={defaultAvatar}
                        alt="avatar"
                    />
                </div>)
                :
                (<div className="img-profile">
                    <img src={URL_AVATAR}
                        alt="avatar"
                        onError={handleImageError}
                    />
                </div>)}
        </>
    )
}
