import React from 'react'
import './HomeScreen.css'

function TimeCard() {
    return (
        <section className='clock-timer'>
            <div className='clock-card'>
                <p>7</p>
                <small>Days</small>
            </div>
            <div className='clock-card'>
                <p>24</p>
                <small>Hours</small>
            </div>
            <div className='clock-card'>
                <p>54</p>
                <small>Minutes</small>
            </div>
            <div className='clock-card'>
                <p>11</p>
                <small>Seconds</small>
            </div>
        </section>
    )
}

export default TimeCard