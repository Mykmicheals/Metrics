import React, { useContext } from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import NavBar from '../../Components/NavBar'
import AppContext from '../../Store/Context'
import Contact from '../ContactScreen/Contact'
import HomeForm from './HomeForm'
import TimeCard from './TimeCard'

function HomeScreen() {
    const appCtx = useContext(AppContext)
    const showContact = appCtx.showContactPage
    const showNav = appCtx.showNav
    const blurStyle = showContact || showNav ? 'blur-effect' : ''


    return (
        <div className='everything-home'>
            <div className={`home-screen ${blurStyle}`}>
                <Header />
                <div className='homescreen-text'>
                    <div className='home-circle-1'></div>
                    <div className='home-circle-2'></div>
                    <div className='home-circle-3'></div>
                    <h2> something awesome is comming</h2>
                    <p>Your All in one affiliate marketing software track, automate and optimize your campaigns </p>
                </div>

                <TimeCard />
                <HomeForm />

                <Footer />

            </div>
            <div className='contact-overlay'>
                {showContact && <Contact />}
            </div>
            {appCtx.showNav && <NavBar />}

            <div className='home-semi-circle'></div>
        </div>

    )
}

export default HomeScreen