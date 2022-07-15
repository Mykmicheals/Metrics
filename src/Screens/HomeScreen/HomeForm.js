import React, { useContext } from 'react'
import AppContext from '../../Store/Context'
import './HomeScreen.css'

function HomeForm() {
    const appCtx = useContext(AppContext)
    const showContact = appCtx.showContactPage
    var emailStyle = showContact ? 'email-form-slide-up' : 'email-form-slide-down'
    return (
        <div>
            <form className='form'>
                <input className='name-input' placeholder='First Name' type='text' />
                <input className='name-input' placeholder='Last Name' type='text' />
                <div className={`email-form ${emailStyle}`}>
                    <input placeholder='Enter Your email address' className='email-input' />
                    <button id='form-button'>Join Our Waiting List</button>
                </div>

            </form>

        </div>
    )
}

export default HomeForm