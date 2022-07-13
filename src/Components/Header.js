import React from 'react'
import { Icon } from '@iconify/react';

function Header() {
    return (
        <div className='header'>
            <h1 className='logo'>METRICKS</h1>
            <ul className='navigation'>
                <li className='header-li'>ABOUT US</li>
                <li className='header-li'>BLOG</li>
                <li className='header-contact-btn'>CONTACT US</li>
            </ul>
        </div>
    )
}

export default Header