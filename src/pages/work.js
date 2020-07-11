import React from 'react'
import { Helmet } from 'react-helmet'
import "../styles/_Work.scss"

import Navbar from '../components/utils/Navbar/Navbar'
import Header from '../components/utils/Header/Header'
import SlidePanel from '../components/utils/SlidePanel/SlidePanel'
import Footer from '../components/utils/Footer/Footer'

const Work = (props) => {

    return (
        <>
            <Helmet>
                <html lang="en" />
                <title>Our Projects - Mission Mechanical Services Inc.</title>
                <meta name="description" content=" The projects and work done by MMSI." />
            </Helmet>
            <Navbar />
            <main className="container-work">
                <Header
                    containerName="work"
                    background="/media/mmsi-work-2.jpg"
                >
                    <h1>Our Projects</h1>
                </Header>
                <SlidePanel
                    color="#131241"
                    image="/media/mmsi-work-1.jpg"
                    imageAlt="MMSI Veterinary Building HVAC work example. Equipment that has been installed on top of a roof."
                    heading="Veterinary Buildings"
                    text="We are using this space to give a small description of what this project looks like. Descriptive information belongs here about what this type of project entails."
                />
                <SlidePanel
                    mirror
                    backgroundColor="#3d5c5c"
                    color="#ffffff"
                    image="/media/mmsi-work-2.jpg"
                    imageAlt="MMSI Medical/Dental Building HVAC work example. Equipment that has been installed on top of a roof."
                    heading="Medical/Dental Buildings"
                    text="We are using this space to give a small description of what this project looks like. Descriptive information belongs here about what this type of project entails."
                />
                <SlidePanel
                    color="#131241"
                    image="/media/mmsi-work-3.jpg"
                    imageAlt="MMSI Commercial Building HVAC work example. Equipment that has been installed on top of a roof."
                    heading="Commercial Buildings"
                    text="We are using this space to give a small description of what this project looks like. Descriptive information belongs here about what this type of project entails."
                />
                <SlidePanel
                    mirror
                    backgroundColor="#3d5c5c"
                    color="#ffffff"
                    image="/media/mmsi-work-4.jpg"
                    imageAlt="MMSI Residential Buildings HVAC work example. Equipment that has been installed on top of a roof."
                    heading="Residential - Custom and Remodel"
                    text="We are using this space to give a small description of what this project looks like. Descriptive information belongs here about what this type of project entails."
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

export default Work