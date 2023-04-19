import React from 'react'

export const Spinner = () => {
    return (
        <div className="loader-wrapper">
            <div className="packman"></div>
            <div className="dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    )
}
