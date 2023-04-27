import React from 'react'

export const ProfileInfo = () => {
    return (
        <div className='container-profileinfo'>
            <div className="profileinfo-user">
                <div className="banner">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.MpAoLVf4y8Dt8v5ZDcyu3QHaCp&pid=Api&P=0"
                        alt="banner"
                        className='banner-img'
                    />
                </div>

                <div className="info">

                    <div className="img-profile">
                        <img src="https://tse2.mm.bing.net/th?id=OIP.KrwtXzJJ9VXkvOX59pIEeQHaHi&pid=Api&P=0"
                            alt="avatar"
                        />
                    </div>

                    <div className="container-bio-name">

                        <div className="name-profile">
                            <strong>pedro <strong>faustino tercero</strong> </strong>
                            <p> <i className="fa-solid fa-location-dot" style={{color: "#ffffff",}} />Las piernas de tu mujer</p>
                        </div>

                        <div className="bio-profile">
                            <p className='date'><i className="fa-solid fa-calendar" style={{color: "#ffffff",}} />20/03/2003</p>
                            <p>me gustan las peliculas y los jueguitos de pc, me dedico a insultar a las madres de mis compañeros de partida y irme afk</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
