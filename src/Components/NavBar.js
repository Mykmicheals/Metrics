import React,{useContext} from 'react'
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
                    <li className=''>Home</li>
                </Link>
                <Link to='/about'>
                    <li className=''>About</li>
                </Link>

                <Link to='/blog'>
                    <li className=''>Blog</li>
                </Link>
                <span className='contact-btn-span'>
                    <li className='header-contact-btn'>CONTACT US</li>
                </span>
            </ul>
            <i onClick={hideNaveHandler} className='nav-cancel'><Icon icon="iconoir:cancel" /></i>
        </div>
    )
}

export default NavBar