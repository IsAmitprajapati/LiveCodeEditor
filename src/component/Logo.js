import React from 'react'
import logo from "../assests/logo.png"

const Logo = () => {
    return (
        <>
            <div className='h-12 select-none'>
                <img src={logo} className="h-full" />
            </div>
        </>
    )
}

export default Logo