import React, { useContext, useState } from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import AppContext from '../Store/Context';


function Header() {


    const appCtx = useContext(AppContext)

    const showContactHandler = () => {
        appCtx.showContactHandler()
    }
 
    return (
        <div className='header'>
            {console.log(appCtx.showContactPage)}
            <h1 className='logo'>METRICKS</h1>
            <ul className='navigation'>
                <li className='header-li'>ABOUT US</li>
                <Link to='/blog'>
                    <li className='header-li'>BLOG</li>
                </Link>
                <li onClick={showContactHandler} className='header-contact-btn'>CONTACT US</li>
            </ul>
        </div>
    )
}

export default Header