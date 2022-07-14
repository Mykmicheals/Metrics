import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <h1 className='logo'>METRICKS</h1>
            <ul className='navigation'>
                <li className='header-li'>ABOUT US</li>
                <Link to='/blog'>
                    <li className='header-li'>BLOG</li>
                </Link>
                <li className='header-contact-btn'>CONTACT US</li>
            </ul>
        </div>
    )
}

export default Header