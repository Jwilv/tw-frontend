import React from 'react'

export const NotesUser = ({userId,message,name}) => {
    return (
        <div className='notes-user-container'>

            <div className='notes-user-img'>
                <img
                    src={`http://localhost:8080/getAvatar?id=${userId}`}
                    alt="img user"
                    className='img-user'
                />
            </div>
            <div className='notes-user-info'>
                <p className='notes-user-name'>{name}</p>
                <p className='notes-user-note'>{message}</p>
            </div>
        </div>
    )
}
