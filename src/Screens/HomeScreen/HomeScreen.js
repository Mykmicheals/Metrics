import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import HomeForm from './HomeForm'
import TimeCard from './TimeCard'

function HomeScreen() {
    return (
        <div>
            <Header />
            <div className='home-screen'>
                <div className='homescreen-text'>
                    <h2> something awesome is comming</h2>
                    <p>Your All in one affiliate marketing software track, automate and optimize your campaigns </p>
                </div>
                <TimeCard />
                <HomeForm />
                <Footer />
            </div>
        </div>

    )
}

export default HomeScreen