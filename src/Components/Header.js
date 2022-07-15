import React, { useContext, useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import AppContext from '../Store/Context';


function Header() {
    const [isMobile, setIsMobile] = useState(false)
    const [hideNav, setHideNav] = useState(false)


    const handleResize = () => {
        if (window.innerWidth < 1200) {
            setIsMobile(true)
            setHideNav(true)
        } else {
            setIsMobile(false)
            setHideNav(false)
        }
    }

    const appCtx = useContext(AppContext)
    const showContactHandler = () => {
        appCtx.showContactHandler()
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    const headerStyle = isMobile ? 'header-nav' : 'header'
    const navStyle = isMobile ? 'hide-menu' : 'show-menu'
    const menuStyle = isMobile ? 'show-menu-icon' : 'hide-menu'
    return (
        <div className={headerStyle}>
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

            <span className={`menu-icon ${menuStyle}`}>
                <Icon icon="heroicons-outline:menu-alt-3" color="white" />
            </span>
        </div>
    )
}

export default Header