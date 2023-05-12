import React from 'react'
import { useForm } from '../hooks/useForm'
import Swal from 'sweetalert2'
import { updateDataProfile } from '../helpers/updateDataProfile'
import { useDispatch } from 'react-redux'
import { startUpdateName } from '../redux/user.slice'
import { fetchTokenUploadFile } from '../helpers/fecht'

export const ChangeInfo = () => {

    const initialState = {
        birthDate: "",
        name: "",
        surname: "",
        location: "",
        biography: "",
    }

    let fileAvatar = null ;
    let fileBanner = null ;

    const handleAvatarFile = (event)=>{
        fileAvatar = event.target.files[0];
    }

    const handleUpdateAvatar = async()=>{
        await fetchTokenUploadFile('updateAvatar',fileAvatar,'avatar')
    }

    const handleBannerFile = (event)=>{
        fileBanner = event.target.files[0];
    }

    const handleUpdateBanner = async()=>{
        await fetchTokenUploadFile('updateBanner',fileBanner,'banner')
    }

    const dispatch = useDispatch()

    const [value, changeValue, reset] = useForm(initialState)

    const { birthDate, name, surname, location, biography } = value;

    const handleSubmit = async (event) => {
        event.preventDefault()

        for (let propiedad in value) {
            if (value.hasOwnProperty(propiedad)) {
                if (value[propiedad].trim() === '') {
                    return Swal.fire('error', "se necesita completar todos los campos", "error")
                }
            }
        }

        const data = { ...value }
        data.birthDate = new Date(birthDate)
        delete data.birthDate

        await updateDataProfile(data)

        dispatch(startUpdateName(data.name))

        reset()
    }
    return (
        <div className='container-change'>

            <div className="input-banner">
                <label htmlFor="banner-input">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.mki6JUTwrGo5AldrftXfAgHaCp&pid=Api&P=0" alt="banner" />
                </label>
                <input 
                id='banner-input' 
                type="file" 
                onChange={ handleBannerFile}
                />
            </div>

            <div className="action-buton"> <button onClick={handleUpdateBanner}>Update Banner</button></div>

            <div className="input-avatar">
                <label htmlFor="avatar-input">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.mki6JUTwrGo5AldrftXfAgHaCp&pid=Api&P=0" alt="banner" />
                </label>
                <input 
                id='avatar-input' 
                type="file" 
                onChange={handleAvatarFile}
                />
            </div>

            <div className="action-buton"> <button onClick={handleUpdateAvatar}>Update Avatar</button></div>

            <div className="container-form-data">
                <div className="card-form">
                    <form onSubmit={handleSubmit}>

                        <div className="card-form-input">

                            <div className="right">
                                <input
                                    className='input-change'
                                    type="text"
                                    placeholder='Name'
                                    name='name'
                                    value={name}
                                    onChange={changeValue}
                                />
                                <input
                                    className='input-change'
                                    type="text"
                                    placeholder='SurName'
                                    name='surname'
                                    value={surname}
                                    onChange={changeValue}
                                />
                                <input
                                    className='input-change'
                                    type="text"
                                    placeholder='>Bio'
                                    name='biography'
                                    value={biography}
                                    onChange={changeValue}
                                />
                            </div>

                            <div className="left">
                                <input
                                    className='input-change'
                                    type="text"
                                    placeholder='location'
                                    name='location'
                                    value={location}
                                    onChange={changeValue}
                                />
                                <input
                                    className='input-change'
                                    type="date"
                                    placeholder='date'
                                    name='birthDate'
                                    value={birthDate}
                                    onChange={changeValue}
                                />
                            </div>

                        </div>

                        <div className="action-buton"> <button>Update Avatar</button></div>
                    </form>
                </div>
            </div>

        </div>
    )
}
