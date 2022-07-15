import React from 'react'
import Header from '../../Components/Header'
import { Icon } from '@iconify/react';
import './AboutScreenStyle.css'
import _ from "lodash";
import Footer from '../../Components/Footer';

function AboutPage() {
    return (
        <div className='about-page'>
            <Header />
            <div className='first-section-container'>
                <div className='first-section-blur'>
                    <div className='first-section-inner-blur'></div>
                </div>
                <div className='first-section-right'>
                    <h3>Built for SaaS <br /> and E-commerce</h3>
                    <p>Our tools are easy to set up and use with a user friendly dashboard that enables you to set up, launch, automate and manage multi-affiliate campaigns in 5 minutes.</p>
                </div>
            </div>
            <div className='about-second-section'>
                <p>Metricks was developed because just like you, we needed a product that could give us a good value.</p>
            </div>
            <div className='about-third-section'>
                <div className='about-third-section-left'>
                    <h4 className='about-third-section-head'>WHY US</h4>
                    <p className='about-third-section-p'>We pride ourselves In our ability to innovate and create World class tools that provrde rericlble and efficient touchpornts between advertisers and affiliates.</p>

                    <ul>
                        {_.times(5, (i) => (
                            <i id='dot-effect'>...................</i>

                        ))}
                    </ul>

                </div>
                <div className='about-third-section-right'>
                    <div className='about-third-inner-blur'></div>
                    <h4 className='about-third-section-head'>Growing with you</h4>
                    <p className='about-third-section-p'>Leverciging the best technoiogy, we have deveioped on one affiliate marketing tracking softwc1re,c1 genius tool to heip you track, automate and optimize your inﬂuencer campaigns, oii from one dashboard </p>

                    <p className='about-third-section-p'>  Our team of experts ore constantly brainstorming, testing ond developing new solutions with only one mung in mind e your business growth. Your success iS our success and by giving you the loois you need to scoie, we grow us well.</p>

                </div>
            </div>
            <div className='about-bottom'>
                <div>
                    <p className='about-bottom-text'>Learn who we are and what drives us</p>
                    <small>Contact Us</small>
                    <i id='arrow-icon'><Icon icon="bi:arrow-right" color="#d105d4" inline={true} /></i>
                </div>
                <h3>What to know about metrics ?</h3>

                <div className='about-buttom-effect'></div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutPage