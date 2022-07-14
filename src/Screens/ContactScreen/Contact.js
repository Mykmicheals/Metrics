import React,{useContext} from 'react'
import './Contact.css'
import { Icon } from '@iconify/react';
import AppContext from '../../Store/Context';

function Contact() {

    const appCtx = useContext(AppContext)
    const hideContactHandler = () => {
        appCtx.hideContactHandler()
    }
    return (
        <div className='home-contact'>
            <h3 id='contact-header'>Hey we are still in the works, but you can send us a message</h3>
            <div className='home-contact-form'>
                <label>First name</label>
                <input placeholder='Enter your firstname' />

                <label>Last name</label>
                <input placeholder='Enter your firstname' />

                <label>Email Address </label>
                <input placeholder='Enter your firstname' />
            </div>
            <i onClick={hideContactHandler} id='home-contact-arrow'>
                <Icon icon="bi:arrow-down" color="#271ac1" rotate={3} />
            </i>
        </div>
    )
}

export default Contact