import React, { useEffect } from 'react'
import { useForm } from '../hooks/useForm'
import Swal from 'sweetalert2'
import { updateDataProfile } from '../helpers/updateDataProfile'
import { useDispatch, useSelector } from 'react-redux'
import { startUpdateName } from '../redux/user.slice'
import { fetchTokenUploadFile } from '../helpers/fecht'
import { startDataProfile } from '../redux/profile.slice'

export const ChangeInfo = () => {
    const {_id} = useSelector( state => state.user)

    useEffect(() => {
        dispatch(startDataProfile(_id))
    }, [])


    const DefaultImg = "https://th.bing.com/th/id/OIP.RCsJuL8ajvvtswlrSZinpQHaEo?w=302&h=187&c=7&r=0&o=5&pid=1.7"

    const {avatar, banner} = useSelector( state => state.ProfileActive)


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
        if(fileAvatar === null ){
            return Swal.fire("Error","se requiere un archivo","error")
        }
        await fetchTokenUploadFile('updateAvatar',fileAvatar,'avatar')
    }

    const handleBannerFile = (event)=>{
        fileBanner = event.target.files[0];
    }

    const handleUpdateBanner = async()=>{

        if(fileBanner === null ){
            return Swal.fire("Error","se requiere un archivo","error")
        }
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

        return Swal.fire("acept","actualizacion correcta","success")
    }
    return (
        <div className='container-change'>

            <div className="input-banner">
                <label htmlFor="banner-input">
                    <img src={
                        (banner.length > 0)
                        ? `http://localhost:8080/getBanner?id=${_id}`
                        : DefaultImg
                    } alt="banner" />
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
                <img src={
                        (avatar.length > 0)
                        ? `http://localhost:8080/getAvatar?id=${_id}`
                        : DefaultImg
                    } alt="banner" />
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
