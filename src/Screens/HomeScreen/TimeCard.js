import React, { useState } from 'react'
import './HomeScreen.css'

function TimeCard() {
    const [hours, setHours] = useState()
    const [min, setmin] = useState()
    const [sec, setSec] = useState()
    setInterval(updateTime, 1000)

    function updateTime() {
        // const latestTime = new Date().toLocaleTimeString();
        const hours = new Date().getHours()
        const min = new Date().getMinutes()
        const sec = new Date().getSeconds()
        // setTime(latestTime)
        setHours(hours)
        setmin(min)
        setSec(sec)
    }

    const dSec = 59 - +sec
    const dMin = 59 - +min
    const dhr = 23 - +hours


    return (
        <section className='clock-timer'>
            <div className='clock-card'>
                <p>7</p>
                <small>Days</small>
            </div>
            <div className='clock-card'>
                <p>{dhr}</p>
                <small>Hours</small>
            </div>
            <div className='clock-card'>
                <p>{dMin}</p>
                <small>Minutes</small>
            </div>
            <div className='clock-card'>
                <p>{dSec}</p>
                <small>Seconds</small>
            </div>
        </section>
    )
}

export default TimeCard