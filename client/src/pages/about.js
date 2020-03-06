import React from 'react'
import { Helmet } from 'react-helmet'
import '../styles/_About.scss'
import useStateValue from '../lib/hooks/useStateValue'

import Navbar from '../components/Navbar/Navbar'
import Header from '../components/utils/Header/Header'
import Medallion from '../components/SVGs/Medallion/Medallion'
import ShieldAndClock from '../components/SVGs/ShieldAndClock/ShieldAndClock'
import Scales from '../components/SVGs/Scales/Scales'
import PoliceBadge from '../components/SVGs/PoliceBadge/PoliceBadge'
import BuilderWithPhone from '../components/SVGs/BuilderWithPhone/BuilderWithPhone'
import Footer from '../components/utils/Footer/Footer'

const About = (props) => {

    const [{ cms }] = useStateValue()

    return (
        <>
            <Helmet>
                <html lang="en" />
                <meta title="About - Mission Mechanical Services Inc." />
                <meta description="About our company." />
            </Helmet>
            <Navbar />
            <main className="about">
                <Header containerName="about"
                    background="/media/mmsi-work-3.jpg"
                >
                    <h1>About Us</h1>
                </Header>
                <section className="headline">{cms.about.headline.content}</section>
                <QuickFacts />
                <section className="core-values">
                    <div className="container-rows">
                        <div className="row">
                            <h2 className="values-h2">Our Core Values</h2>
                        </div>
                        <ValuesRow
                            coreValue="Quality"
                            svg={<Medallion />}
                            desc={cms.about.quality.content}
                        />
                        <ValuesRow
                            coreValue="Dependability"
                            svg={<ShieldAndClock />}
                            desc={cms.about.dependability.content}
                        />
                        <ValuesRow
                            coreValue="Integrity"
                            svg={<Scales />}
                            desc={cms.about.integrity.content}
                        />
                    </div>
                </section>
                <section className="team">
                    <h2>Our Team</h2>
                    <TeamRow>
                        <Teammate
                            image="/media/rick.jpg"
                            name="Rick Mayer"
                            title="President"
                        />
                        <Teammate
                            svg={<BuilderWithPhone fill="#ffffff" />}
                            name="Arturo Espinoza"
                            title="Technical Advisor"
                        />
                        <Teammate
                            svg={<PoliceBadge fill="#ffffff" />}
                            name="Brett Mayer"
                            title="Project Manager"
                        />
                    </TeamRow>
                </section>
            </main>
            <Footer
                backgroundColor="#131241"
                headerColor="#bfbfbf"
                linkColor="#bfbfbf"
            />
        </>
    )
}

export default About

const QuickFacts = (props) => {

    const [{ cms }] = useStateValue()

    return (
        <section className="container-quick-facts">
            <h2>Quick Facts</h2>
            <img className="logo" src="/favicon.ico" alt="MMSI Logo." title="Welcome to the Mission Mechanical Services Inc. website." />
            <ul>
                <li>
                    <h3>Established</h3>
                    <p>{cms.about.established.content}</p>
                </li>
                <li>
                    <h3>California Contractors License</h3>
                    <p>{cms.about.license.content}</p>
                </li>
                <li>
                    <h3>Partnerships</h3>
                    <p>{cms.about.partnerships.content}</p>
                </li>
                <li>
                    <h3>Phone Number</h3>
                    <p>{cms.about.phoneNumber.content}</p>
                </li>
                <li>
                    <h3>Contact Email</h3>
                    <p><span className="word-break">rick@</span>mission<span className="word-break">mechanicalservices</span><span className="word-break">.com</span></p>
                </li>
            </ul>
        </section>
    )
}

const ValuesRow = (props) => (
    <div className="row">
        <span className="left bold">
            <p>{props.coreValue}</p>
            {props.svg}
        </span>
        <span className="right">
            <p>{props.desc}</p>
        </span>
    </div>
)

const TeamRow = (props) => (
    <div className={`team-row`}>
        {props.children}
    </div>
)

const Teammate = (props) => (
    <span className="teammate">
        {props.svg ? <span className="teammate-photo">{props.svg}</span> : <img className="teammate-photo image" src={props.image || `${process.env.PUBLIC_URL + '/media/logo.png'}`} alt={props.imageAlt || "MMSI Team Member"} />}
        <h3>{props.name}</h3>
        <h4>{props.title}</h4>
    </span>
)