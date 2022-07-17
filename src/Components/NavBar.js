import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import AppContext from '../Store/Context';

function NavBar() {

    const appCtx = useContext(AppContext)

    const hideNaveHandler = () => {

        appCtx.hideNavHandler()
    }
    return (
        <div className='responsive-nav'>
            <ul className=''>
                <Link to='/'>
                    <li onClick={hideNaveHandler} className=''>Home</li>
                </Link>
                <Link to='/about'>
                    <li onClick={hideNaveHandler} className=''>About</li>
                </Link>

                <Link to='/blog'>
                    <li onClick={hideNaveHandler} className=''>Blog</li>
                </Link>
                <Link>
                    <li onClick={hideNaveHandler}>Contact</li>
                </Link>
            </ul>
            <i onClick={hideNaveHandler} className='nav-cancel'><Icon icon="iconoir:cancel" /></i>
        </div>
    )
}

export default NavBar