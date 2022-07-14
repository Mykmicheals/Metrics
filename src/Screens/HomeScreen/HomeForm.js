import React from 'react'
import './HomeScreen.css'

function HomeForm() {
    return (
        <div>
            <form className='form'>
                <input className='name-input' placeholder='First Name' type='text' />
                <input className='name-input' placeholder='Last Name' type='text' />
                <div className='email-form'>
                    <input placeholder='Enter Your email address' className='email-input' />
                    <button id='form-button'>Join Our Waiting List</button>
                </div>

            </form>

        </div>
    )
}

export default HomeForm