import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

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
