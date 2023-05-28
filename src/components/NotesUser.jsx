import React from 'react'
import { ImgNoteUser } from './ImgNoteUser'

export const NotesUser = ({userId,message,name}) => {
    return (
        <div className='notes-user-container'>

            <div className='notes-user-img'>
                <ImgNoteUser id={userId}/>
            </div>
            <div className='notes-user-info'>
                <p className='notes-user-name'>{name}</p>
                <p className='notes-user-note'>{message}</p>
            </div>
        </div>
    )
}
