import React from 'react'
import { NotesUser } from './NotesUser'
import { UserRecommended } from './UserRecommended'
import { useSelector } from 'react-redux'

export const MenuRight = () => {

    const {recommended} = useSelector( state => state.notes)

    return (


        <div className='menu-container-right'>

            <div className='menu-container-right-items'>
                <p className="menu-container-right-title-notes"> Publicaciones recomendados: </p>
                <div className='menu-container-right-items-notes'>
                    <div className='menu-container-right-notes'>
                        {
                            recommended.map( (notes) => {
                                return <NotesUser key={notes._id} {...notes} />
                            })
                        }
                    </div>
                </div>
            </div>


            <div className='menu-container-right-items-user'>
                <p className="menu-container-right-title"> Usuarios recomendados: </p>
                <UserRecommended />
                <UserRecommended />
                <UserRecommended />
                <UserRecommended />
            </div>
            
        </div>
    )
}
