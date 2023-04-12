import React from 'react'
import "../scss/index.scss"

export const LoginPage = () => {
    return (
        <div className='container-login-logout'>

            <div className="form-container">
                <p className="title">Login</p>
                <form className="form">
                    <div className="input-group">
                        <label for="username">Username</label>
                        <input type="text" name="username" id="username" placeholder="" />
                    </div>
                    <div className="input-group">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="" />
                    </div>
                    <button className="sign">Sign in</button>
                </form>
                <p className="signup">Don't have an account?
                    <a rel="noopener noreferrer" href="#" className=""> Sign up</a>
                </p>
            </div>
        </div>

    )
}
