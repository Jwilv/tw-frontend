import React from 'react'
import { ImgNoteUser } from './ImgNoteUser'
import { useNavigate } from 'react-router'

export const NotesUser = ({userId,message}) => {

    const navigate = useNavigate()

    const handleUser = ()=>{
        navigate(`/profile/${userId}`)
    }

    return (
        <div className='notes-user-container'>

            <div className='notes-user-img' onClick={handleUser}>
                <ImgNoteUser id={userId}/>
            </div>
            <div className='notes-user-info'>
                <p className='notes-user-note'>{message}</p>
            </div>
        </div>
    )
}
