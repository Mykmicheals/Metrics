import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import AppContext from '../Store/Context';
import Contact from '../Screens/ContactScreen/Contact';

function NavBar() {

    const appCtx = useContext(AppContext)
    const showContact = appCtx.showContactPage

    const hideNaveHandler = () => {

        appCtx.hideNavHandler()
    }
    const showContactHandler=() => {
        appCtx.showContactHandler()
    }
    return (
        <Fragment>
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
                        <li onClick={showContactHandler}>Contact</li>
                </ul>
                <i onClick={hideNaveHandler} className='nav-cancel'><Icon icon="iconoir:cancel" /></i>

            </div>
            <div className='contact-overlay'>
                {showContact && <Contact />}
        
            </div>
        </Fragment>
       
    )
}

export default NavBar