import React from 'react'
import "../scss/index.scss"
import { useForm } from '../hooks/useForm'
import Swal from 'sweetalert2'
import {  fetchWithoToken } from '../helpers/fecht'
import { verifyToken } from '../helpers/getUidAndName'
import { useDispatch } from 'react-redux'
import { startLogin } from '../redux/auth.slice'

export const LoginPage = () => {

    const dispatch = useDispatch()

    const initialState = {
        email: "test.com",
        password: "123456",
    }
    const [values, changeForm, reset] = useForm(initialState)
    const { email, password } = values
    console.log(values)
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (password.length < 6) {
            return Swal.fire("Error", "la contraseña debe ser de minimo 6 caracteres", "error")
        }

        const data = { email, password}

        dispatch(startLogin(data))
    

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
