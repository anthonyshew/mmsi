import React from 'react'
import { Helmet } from 'react-helmet'
import '../styles/_ThankYou.scss'

import Navbar from '../components/utils/Navbar/Navbar'
import Footer from '../components/utils/Footer/Footer'

const ThankYou = (props) => {
    return (
        <>
            <Helmet>
                <html lang="en" />
                <title>"Thank You - Mission Mechanical Services Inc." </title>
                <meta name="description" content=" Thank you from all of us at MMSI!" />
            </Helmet>
            <Navbar />
            <main className="container-thank-you">
                <img className="image" src="/favicon.ico" alt="MMSI Logo" title="MMSI appreciates your communication." />
                <p className="text">Thank you for contacting us.</p>
                <p className="text">We will get back to you as soon as we can (usually within 2 business days).</p>
            </main>
            <Footer
                backgroundColor="#131241"
                headerColor="#bfbfbf"
                linkColor="#bfbfbf"
            />
        </>
    )
}

export default ThankYou