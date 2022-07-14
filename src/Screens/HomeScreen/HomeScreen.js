import React,{useContext} from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import AppContext from '../../Store/Context'
import Contact from '../ContactScreen/Contact'
import HomeForm from './HomeForm'
import TimeCard from './TimeCard'

function HomeScreen() {
    const appCtx = useContext(AppContext)
   const showContact = appCtx.showContactPage
    return (
        <div className='everything'>
          <div className='home-screen'>
                <Header />
                <div className='homescreen-text'>
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
        </div>

    )
}

export default HomeScreen