import React from 'react'
import "../scss/index.scss"
import { useForm } from '../hooks/useForm'

export const LoginPage = () => {

    const initialState = {
        email: "",
        password: "",
    }
    const [values, changeForm, reset] = useForm(initialState)
    const { email, password } = values
    console.log(values)
    const handleSubmit = (event)=>{
        event.preventDefault()
        
    }
    return (
        <div className='container-login-logout'>

            <div className="form-container">
                <p className="title">Login</p>
                <form 
                className="form"
                onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label >Email</label>
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={changeForm}
                        />
                    </div>
                    <div className="input-group">
                        <label >Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={changeForm}
                        />
                    </div>
                    <button
                        className="sign"
                        type='submit'
                    >Sign in</button>
                </form>
                <p className="signup">Don't have an account?
                    <a rel="noopener noreferrer" href="#" className=""> Sign up</a>
                </p>
            </div>
        </div>

    )
}
