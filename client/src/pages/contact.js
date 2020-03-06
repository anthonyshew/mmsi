import React from 'react'
import { Helmet } from 'react-helmet'
import '../styles/_Home.scss'

import Navbar from '../components/utils/Navbar/Navbar'
import ContactForm from '../components/utils/ContactForm/ContactForm'
import Footer from '../components/utils/Footer/Footer'

const Home = (props) => {
    return (
        <>
            <Helmet>
                <html lang="en" />
                <meta title="Contact Us - Mission Mechanical Services Inc." />
                <meta description="Information on how to contact us." />
            </Helmet>
            <Navbar />
            <main className="home">
                <ContactForm
                    svgFill="#131241"
                    backgroundColor="#3d5c5c"
                    labelColor="#ffffff"
                    inputBackgroundColor="#ffffff"
                    inputColor="#131241"
                    buttonBackgroundColor="#131241"
                    buttonColor="#ffffff"
                />
            </main>
            <Footer
                backgroundColor="#131241"
                headerColor="#bfbfbf"
                linkColor="#bfbfbf"
            />
        </>
    )
}

export default Home
