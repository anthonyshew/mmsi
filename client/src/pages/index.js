import React, { useEffect } from 'react'
import '../styles/_Home.scss'
import gsap from 'gsap'
import { Helmet } from 'react-helmet'

import useStateValue from '../lib/hooks/useStateValue'

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

    const [{ cms }] = useStateValue()

    useEffect(() => {
        gsap.to('.circle-spin', { repeat: -1, ease: 'none', duration: 13, rotation: 360, transformOrigin: '50% 50%' })

        const tl = gsap.timeline()
            .addLabel("letters-start", 0)
            .addLabel("letters-1", .2)
            .addLabel("letters-2", .5)
            .addLabel("letters-3", .8)
            .from('.background-lines', { duration: 3, autoAlpha: 0 })
            .from('.m1-left-leg', { duration: .7, scaleY: 0, transformOrigin: "0 0" }, 'letters-start')
            .from('.m1-right-leg', { duration: 1.2, scaleY: 0, transformOrigin: "0 0" }, 'letters-2')
            .from('.m1-left-elbow', { duration: .8, scaleY: 0, transformOrigin: "50% 50%" }, 'letters-1')
            .from('.m1-right-elbow', { duration: 1.2, scaleY: 0, transformOrigin: "50% 50%" }, 'letters-2')
            .from('.m1-center-top-leg', { duration: .9, scaleY: 0, transformOrigin: "0 0" }, 'letters-start')
            .from('.m1-center-bottom-leg', { duration: 1.2, scaleY: 0, transformOrigin: "0 0" }, 'letters-2')
            .from('.m2-left-leg', { duration: .4, scaleY: 0, transformOrigin: "0 0" }, 'letters-1')
            .from('.m2-right-leg', { duration: 1.4, scaleY: 0, transformOrigin: "0 0" }, 'letters-3')
            .from('.m2-left-elbow', { duration: 1.2, scaleY: 0, transformOrigin: "50% 50%" }, 'letters-2')
            .from('.m2-right-elbow', { duration: 1, scaleY: 0, transformOrigin: "50% 50%" }, 'letters-1')
            .from('.m2-center-top-leg', { duration: .8, scaleY: 0, transformOrigin: "0 0" }, 'letters-1')
            .from('.m2-center-bottom-leg', { duration: 1.2, scaleY: 0, transformOrigin: "0 0" }, 'letters-2')
            .from('.top-right', { duration: .6, scaleX: 0, transformOrigin: "0 0" }, 'letters-1')
            .from('.top-left', { duration: .5, scaleX: 0, transformOrigin: "100% 0" }, 'letters-2')
            .from('.center-left', { duration: .8, scaleX: 0, transformOrigin: "100% 0" }, 'letters-1')
            .from('.center-right', { duration: .7, scaleX: 0, transformOrigin: "0 0" }, 'letters-3')
            .from('.bottom-right', { duration: 1.3, scaleX: 0, transformOrigin: "0 0" }, 'letters-2')
            .from('.bottom-left', { duration: 1.1, scaleX: 0, transformOrigin: "100% 0" }, 'letters-3')
            .from('.i-top', { duration: 1, scaleX: 0 }, 'letters-start')
            .from('.i-top-path', { duration: 1, scaleY: 0, transformOrigin: "100% 100%" }, 'letters-start')
            .from('.i-bottom', { duration: 1, scaleX: 0, transformOrigin: "100% 100%" }, 'letters-start')
            .from('.i-bottom-path', { duration: 1, scaleY: 0, transformOrigin: "0 0" }, 'letters-start')

        let observer = new IntersectionObserver(entry => {
            // If I scroll from below element, go directly to end of animation.
            if (entry[0].rootBounds !== null && entry[0].boundingClientRect.y < entry[0].rootBounds.y) {

                tl.progress(1)
            }

            //If I am already on the element or coming from above it, play the animation.
            if (entry[0].intersectionRatio > 0 && (entry[0].boundingClientRect.y > entry[0].rootBounds.y)) {
                tl.play(0)
            }
        })

        observer.observe(document.querySelector(".svg-blueprint"))
    }, [])

    return (
        <>
            <Helmet>
                <html lang="en" />
                <title>"Home - Mission Mechanical Services Inc."</title>
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
                        text={cms.home.columnOne.content}
                        color="#131241"
                    />
                    <Column
                        icon={<Consultant animated fill="#131241" />}
                        heading="Consultation"
                        text={cms.home.columnTwo.content}
                        color="#131241"

                    />
                    <Column
                        icon={<Maintenance />}
                        heading="Maintenance"
                        text={cms.home.columnThree.content}
                        color="#131241"
                    />
                </ContainerColumns>
                <SlidePanel
                    svg={<HeroSVG />}
                    heading="About Us"
                    text={cms.home.aboutUs.content}
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
                    text={cms.home.ourWork.content}
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
