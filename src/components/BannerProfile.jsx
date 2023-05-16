import React from 'react'

export const BannerProfile = () => {

    const defaultBanner = "https://tse4.mm.bing.net/th?id=OIP.Gxnh2TWyj1hgynsiLbrh2AHaBm&pid=Api&P=0&h=180";

    const HOST = 'http://localhost:8080'

    const URL_BANNER = `${HOST}/getBanner?id=${id}`;

    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    return (

        <>
            {(imageError)
                ?
                (<div className="banner">
                    <img src={defaultBanner}
                        alt="banner"
                        className='banner-img'
                    />
                </div>)
                :
                (<div className="banner">
                    <img src={URL_BANNER}
                        alt="banner"
                        className='banner-img'
                        onError={handleImageError}
                    />
                </div>)}
        </>
    )
}
