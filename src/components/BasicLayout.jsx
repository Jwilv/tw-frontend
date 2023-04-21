
import React from 'react'
export const BasicLayout = ({ children, className }) => {
    return (
        <div className='menu-container'>
            <div className='menu-left'>
                <div className='menu-left-options'>

                    <p className='menu-left-items'>
                        <i className="fa-solid fa-house"
                            style={{ color: "#ffffff", }}
                        />
                        inicio
                    </p>

                    <p className='menu-left-items'>
                        <i className="fa-solid fa-magnifying-glass"
                            style={{ color: "#ffffff", }}
                        />
                        Buscar Personas
                    </p>

                    <p className='menu-left-items'>
                        <i className="fa-solid fa-user"
                            style={{ color: "#ffffff", }}
                        />
                        Perfil
                    </p>

                    <p className='menu-left-items'>
                        <i className="fa-solid fa-power-off"
                            style={{ color: "#ffffff", }}
                        />
                        Logout
                    </p>
                    
                </div>
            </div>
            <div>
                {children}
            </div>
        </div>


    )
}
