import React, { useContext, useState} from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import AppContext from '../Store/Context';

function Header() {
    const [isMobile, setIsMobile] = useState(false)

    const appCtx = useContext(AppContext)
    const showContactHandler = () => {
        appCtx.showContactHandler()
    }

    const showNavHandler = () => {
        appCtx.showNavHandler()
    }

    const navStyle = isMobile ? 'hide-menu' : 'show-menu'
  
    return (
        <div className='header'>
            <Link to='/comingsoon'>
                <h1 className='logo'>METRICKS</h1>
            </Link>

            <div className={navStyle}>
                <ul className='navigation'>
                    <Link to='/about'>
                        <li className='header-li'>ABOUT US</li>
                    </Link>

                    <Link to='/blog'>
                        <li className='header-li'>BLOG</li>
                    </Link>
                    <li onClick={showContactHandler} className='header-contact-btn'>CONTACT US</li>

                </ul>
            </div>

            <span className='menu-icon'>
                <Icon onClick={showNavHandler} icon="heroicons-outline:menu-alt-3" color="white" />
            </span>

        </div>
    )
}

export default Header