import React from 'react'
export const BasicLayout = ({ children, className }) => {
    return (
        <div className='menu-container'>
            <div className='menu-left'>menu</div>
            <div>
                {children}
            </div>
        </div>


    )
}
