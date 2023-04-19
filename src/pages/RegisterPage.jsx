import React from 'react'
import "../scss/index.scss"
import { useForm } from '../hooks/useForm'
import Swal from 'sweetalert2'
import { fetchWithoToken } from '../helpers/fecht'
import { useDispatch } from 'react-redux'
import { startRegister } from '../redux/auth.slice'

export const Registerpage = () => {

    const dispatch = useDispatch()

    const initialState = {
        email: "",
        password: "",
        passwordConfirm: "",
        name: "",

    }
    const [values, changeForm, reset] = useForm(initialState)
    const { email, password, passwordConfirm, name } = values
    console.log(values)

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (password.length < 6) {
            return Swal.fire("Error", "la contraseña debe ser de minimo 6 caracteres", "error")
        }
        if (password !== passwordConfirm) {
            return Swal.fire("Error", "las contraseñas deben ser iguales", "error")
        }

        if (name.length < 4) {
            return Swal.fire("Error", "el nombre debe ser de minimo 4 caracteres", "error")
        }

        const data = {
            name,
            password,
            email,
        }

        dispatch(startRegister(data))
    }
    return (
        <div className='container-login-logout'>

            <div className="form-container">
                <p className="title">Register</p>
                <form
                    className="form"
                    onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label >Name</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={changeForm}
                        />
                    </div>
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
                            autoComplete='off'
                            value={password}
                            onChange={changeForm}
                        />
                    </div>
                    <div className="input-group">
                        <label >Password Confirm</label>
                        <input
                            type="password"
                            name="passwordConfirm"
                            autoComplete='off'
                            value={passwordConfirm}
                            onChange={changeForm}
                        />
                    </div>
                    <button
                        className="sign"
                        type='submit'
                    >Sign up</button>
                </form>
                <p className="signup">you have an account ?
                    <a rel="noopener noreferrer" href="#" className=""> Sign in</a>
                </p>
            </div>
        </div>

    )
}
