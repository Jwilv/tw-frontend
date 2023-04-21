import React from 'react'
export const BasicLayout = ({ children, className }) => {
    return (
        <div className='menu-container'>
            <div className='menu-left'>
                <div className='menu-left-options'>
                    <p className='menu-left-items'>inicio</p>
                    <p className='menu-left-items'>Buscar Personas</p>
                    <p className='menu-left-items'>Perfil</p>
                    <p className='menu-left-items'>Logout</p>
                </div>
            </div>
            <div>
                {children}
            </div>
        </div>


    )
}
