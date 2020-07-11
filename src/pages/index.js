import React from 'react'
import '../styles/_Home.scss'
import '../styles/_reset.scss'
import { Helmet } from 'react-helmet'

import Navbar from '../components/utils/Navbar/Navbar'
import Header from '../components/utils/Header/'
import HeroSVG from '../components/SVGs/Blueprint/Blueprint'
import ContainerColumns from '../components/utils/ContainerColumns/ContainerColumns'
import Column from '../components/utils/Column/Column'
import ContactForm from '../components/utils/ContactForm/ContactForm'
import SlidePanel from '../components/utils/SlidePanel/SlidePanel'
import PencilAndSquare from '../components/SVGs/PencilAndSquare/PencilAndSquare'
import Consultant from '../components/SVGs/Consultant/Consultant'
import Maintenance from '../components/SVGs/Maintenance/Maintenance'
import Footer from '../components/utils/Footer/Footer'

const Home = (props) => {
    return (
        <>
            <Helmet>
                <html lang="en" />
                <title>Home - Mission Mechanical Services Inc.</title>
                <meta name="description" content=" The digital home of Mission Mechanical Services Inc." />
            </Helmet>
            <Navbar />
            <main className="home">
                <Header
                    containerName="home"
                    height="500px"
                    slideshow={[["/media/mmsi-work-1.jpg",
                        "/media/mmsi-work-8.jpg",
                        "/media/mmsi-work-14.jpg",
                        "/media/mmsi-work-4.jpg",
                        "/media/mmsi-work-2.jpg"], 7000]}
                    dimmer
                >
                    <h1 style={{ fontSize: "56px" }}>Mission Mechanical Services Inc.</h1>
                    <h2>
                        <span className="line">A Trusted</span>
                        <span className="line">Southern California</span>
                        <span className="line">HVAC Provider</span>
                        <span className="line">Since 1997</span>
                    </h2>
                </Header>
                <ContainerColumns>
                    <Column
                        icon={<PencilAndSquare />}
                        heading="Custom Solutions"
                        text="We understand that every building we get to work on has different needs for those who are going to live, work, and breathe within its walls. Creating a tailored design for each site we visit, we strive to ensure that every system we create provides an environment for success for its people."
                        color="#131241"
                    />
                    <Column
                        icon={<Consultant animated fill="#131241" />}
                        heading="Consultation"
                        text="Providing expert advice when you need it, MMSI can advise you on any of your HVAC needs. Our background, experience, and knowledge allow us to help understand your HVAC system better, figure out how to fix current problems, and prevent issues that may develop in the future."
                        color="#131241"

                    />
                    <Column
                        icon={<Maintenance />}
                        heading="Maintenance"
                        text="No matter how well your HVAC was installed, problems will occur over time - and we're here when they do. Whether your issues are the result of an accident, poor maintenance, or good ol' Father Time, our knowledgeable technicians can troubleshoot your system and resolve any challenging issue."
                        color="#131241"
                    />
                </ContainerColumns>
                <SlidePanel
                    svg={<HeroSVG />}
                    heading="About Us"
                    text="From a humble beginning as a one-man shop in 1997, over the past 23 years, MMSI has built a company founded on industry knowledge, honesty, and integrity. We have members on our team who have been with the company for over 20 years servicing customers. We continue to build our reputation with each newly satisfied customer."
                    button
                    buttonText="About Us"
                    buttonLink="/about"
                    buttonBackgroundColor="#131241"
                    buttonColor="#ffffff"
                    backgroundColor="#3d5c5c"
                    color="#ffffff"
                />
                <SlidePanel
                    mirror={true}
                    image={'/media/mmsi-work-1.jpg'}
                    imageAlt="An example of MMSI's work."
                    heading="Our Work"
                    text="MMSI provides everything from routine service calls to quarterly maintenance contracts. We design and build commercial projects and custom homes, specializing in veterinary hospitals and commercial tenant improvements."
                    button
                    buttonText="Our Work"
                    buttonLink="/work"
                    buttonBackgroundColor="#131241"
                    buttonColor="#ffffff"
                    backgroundColor="#e6e6e6"
                    color="#131241"
                />
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
