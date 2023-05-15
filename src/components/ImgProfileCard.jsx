import React, { useState } from 'react'

export const ImgProfileCard = () => {

    const defaultAvatar = "https://tse2.mm.bing.net/th?id=OIP.eAevlGw1UR_UqXA_2y-2tAHaHa&pid=Api&P=0";

    const HOST = 'http://localhost:8080'

    const URL_AVATAR = `${HOST}/getAvatar?id=${id}`;



    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    return (

        <>
            { (imageError)
                ?
                (<img
                    src={defaultAvatar}
                    alt="img user"
                    className='img-user'
                />)
                :
                (<img
                    src={URL_AVATAR}
                    onError={handleImageError}
                    alt="img user"
                    className='img-user'
                />)}
        </>
    )
}
