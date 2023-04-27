import React from 'react'
import { useNavigate, useNavigation } from 'react-router'
import { unstable_HistoryRouter } from 'react-router-dom';

export const NavbarLayout = ({ children }) => {


    const navigate  = useNavigate()

    const PREVIOUS_PAGE = -1

    const backPage = ()=>{
        navigate(PREVIOUS_PAGE)
    }

    return (
        <>
            <h1
                onClick={backPage}>NavbarLayout</h1>
            {children}
        </>
    )
}
