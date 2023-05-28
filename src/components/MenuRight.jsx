import React from 'react'
import { NotesUser } from './NotesUser'
import { UserRecommended } from './UserRecommended'
import { useSelector } from 'react-redux'

export const MenuRight = () => {

    const {recommended : recommendedNotes} = useSelector( state => state.notes)
    const {recommended : recommendedUsers} = useSelector( state => state.listUsers)


    return (


        <div className='menu-container-right'>

            <div className='menu-container-right-items'>
                <p className="menu-container-right-title-notes"> Publicaciones recomendados: </p>
                <div className='menu-container-right-items-notes'>
                    <div className='menu-container-right-notes'>
                        {
                            recommendedNotes.map( (notes) => {
                                return <NotesUser key={notes._id} {...notes} />
                            })
                        }
                    </div>
                </div>
            </div>


            <div className='menu-container-right-items-user'>
                <p className="menu-container-right-title"> Usuarios recomendados: </p>
                {
                    recommendedUsers.map( user => {
                        return <UserRecommended key={user.id} {...user}/>
                    })
                }
            </div>
            
        </div>
    )
}
