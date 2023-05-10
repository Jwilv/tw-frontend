import React from 'react'
import { useForm } from '../hooks/useForm'
import moment from 'moment/moment'

export const ChangeInfo = () => {

    const initialState = {
         date : "",
         name:"",
         surname:"",
         location : "",
         biography:"",
        }

    const [value, changeValue] = useForm()

    const {date, name, surname, location} = value;

    const dateM = moment(date)

    console.log(dateM.format("DD/MM/YYYY"))
    const handleSubmit = (event)=>{
        event.preventDefault()
    }
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
                    <form onSubmit={handleSubmit}>

                        <div className="card-form-input">

                            <div className="right">
                                <input className='input-change' type="text" placeholder='Name' />
                                <input className='input-change' type="text" placeholder='SurName' />
                                <input className='input-change' type="text" placeholder='>Bio' />
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
                                name='date'
                                value={date}
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
