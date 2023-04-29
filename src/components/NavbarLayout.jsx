import React from 'react'
import { useNavigate } from 'react-router'

export const NavbarLayout = ({ children }) => {


    const navigate  = useNavigate()

    const PREVIOUS_PAGE = -1

    const backPage = ()=>{
        navigate(PREVIOUS_PAGE)
    }

    return (

        <>
                <div className='navbar-container'>
                <i 
                className="fa-solid fa-arrow-left icon" 
                style={{color: "#ffffff",}} 
                onClick={backPage}
                />
            
        </div>

        {children}
        </>

    )
}
