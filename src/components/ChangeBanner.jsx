import React from 'react'

export const ChangeBanner = () => {
    return (
        <div className='container-change'>

            <div className="input-banner">
                <label htmlFor="entradaa">
                <img src="https://tse4.mm.bing.net/th?id=OIP.mki6JUTwrGo5AldrftXfAgHaCp&pid=Api&P=0" alt="banner" />
                </label>
                <input id='entradaa' type="file" />
            </div>

            <div className="banner-action"> <button>Update Banner</button></div>

        </div>
    )
}
