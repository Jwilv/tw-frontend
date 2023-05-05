import React from 'react'

export const ChangeInfo = () => {
    return (
        <div className='container-change'>

            <div className="input-banner">
                <label htmlFor="banner-input">
                <img src="https://tse4.mm.bing.net/th?id=OIP.mki6JUTwrGo5AldrftXfAgHaCp&pid=Api&P=0" alt="banner" />
                </label>
                <input id='banner-input' type="file" />
            </div>

            <div className="action-buton"> <button>Update Banner</button></div>

            <div className="input-avatar">
                <label htmlFor="avatar-input">
                <img src="https://tse4.mm.bing.net/th?id=OIP.mki6JUTwrGo5AldrftXfAgHaCp&pid=Api&P=0" alt="banner" />
                </label>
                <input id='avatar-input' type="file" />
            </div>

            <div className="action-buton"> <button>Update Avatar</button></div>

        </div>
    )
}
