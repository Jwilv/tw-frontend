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

            <div className="container-form-data">
                <div className="card-form">
                    <form>

                        <div className="card-form-input">

                            <div className="right">
                                <input className='input-change' type="text" placeholder='Name' />
                                <input className='input-change' type="text" placeholder='SurName' />
                                <input className='input-change' type="text" placeholder='>Bio' />
                            </div>

                            <div className="left">
                                <input className='input-change' type="text"  placeholder='location'/>
                                <input className='input-change' type="text" placeholder='date' />
                            </div>
                            
                        </div>

                        <div className="action-buton"> <button>Update Avatar</button></div>
                    </form>
                </div>
            </div>

        </div>
    )
}
