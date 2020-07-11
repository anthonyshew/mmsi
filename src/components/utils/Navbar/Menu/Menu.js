import React, { useState, useEffect } from 'react'
import { Link, useLocation } from '@reach/router'
import gsap from 'gsap'
import './_Menu.scss'

const Menu = (props) => {
    const [currentTemp, setCurrentTemp] = useState(72)
    const [arrIndex, setArrIndex] = useState(12)

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [])

    useEffect(() => {
        gsap.timeline()
            .addLabel('start', 0)
            .addLabel('links', .3)
            .from('.background-dimmer', { duration: .2, autoAlpha: 0 }, 'start')
            .from('.mobile-nav-links', { duration: .2, width: 0 }, 'start')
            .from('.mobile-nav-links span', { autoAlpha: 0 }, 'links')
    }, [])

    const backgrounds = [
        "#2857a4",
        "#2d62b9",
        "#326dcd",
        "#467cd2",
        "#5b8ad7",
        "#6f99dc",
        "#84a8e1",
        "#98b6e6",
        "#adc5eb",
        "#c1d3f0",
        "#d6e2f5",
        "#eaf0fa",
        "#ffffff",
        "#ffe6e6",
        "#ffcccc",
        "#ffb3b3",
        "#ff9999",
        "#ff8080",
        "#ff6666",
        "#ff4d4d",
        "#ff3333",
        "#ff1a1a",
        "#ff0000",
        "#e60000",
        "#cc0000",
        "#b30000"]

    const animateWarning = warning => {
        const elem = warning === 'max' ? ".warning-max" : ".warning-min"

        gsap.killTweensOf(elem)
        gsap.timeline()
            .to(elem, {
                autoAlpha: 1,
                repeat: 2,
                yoyo: true
            })
            .to(elem, { autoAlpha: 0 })
    }

    const increment = () => {
        if (currentTemp >= 85) return animateWarning('max')
        setCurrentTemp(currentTemp + 1)
        setArrIndex(arrIndex + 1)
    }

    const decrement = () => {
        if (currentTemp <= 60) return animateWarning('min')
        setCurrentTemp(currentTemp - 1)
        setArrIndex(arrIndex - 1)
    }

    return (
        <div className="mobile-menu">
            <ScrollToTop />
            <div className="background-dimmer" />
            <svg onClick={props.menuToggle} className="close-button" viewBox="0 0 296 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.5" y="1.5" width="293" height="97" rx="6.5" stroke="black" fill="white" strokeWidth="8" />
                <g transform="translate(0, -10)">
                    <path d="M145.828 57.544C145.828 61.2987 146.191 63.9867 146.916 65.608C147.684 67.1867 148.922 67.976 150.628 67.976C152.335 67.976 154.746 67.5707 157.86 66.76L159.524 75.784C156.154 77.0213 152.762 77.64 149.348 77.64C144.228 77.64 140.495 75.9547 138.148 72.584C135.844 69.1707 134.692 64.1147 134.692 57.416C134.692 50.6747 135.908 45.5333 138.34 41.992C140.772 38.408 144.74 36.616 150.244 36.616C153.487 36.616 156.58 37.2987 159.524 38.664L157.796 48.584C154.468 47.4747 152.143 46.92 150.82 46.92C148.943 46.92 147.642 47.752 146.916 49.416C146.191 51.0373 145.828 53.7467 145.828 57.544ZM161.326 69.96V35.976H171.886V66.568C171.886 67.2933 172.036 67.8053 172.334 68.104C172.676 68.4027 173.252 68.552 174.062 68.552L173.23 77.64H169.71C166.894 77.64 164.782 77.064 163.374 75.912C162.009 74.7173 161.326 72.7333 161.326 69.96ZM175.752 61.576C175.752 55.944 176.818 51.8693 178.952 49.352C181.128 46.8347 184.498 45.576 189.064 45.576C193.672 45.576 197.021 46.8133 199.112 49.288C201.202 51.7627 202.248 55.8373 202.248 61.512C202.248 67.144 201.224 71.24 199.176 73.8C197.128 76.36 193.778 77.64 189.128 77.64C184.477 77.64 181.085 76.36 178.952 73.8C176.818 71.24 175.752 67.1653 175.752 61.576ZM191.112 55.496C190.856 54.6427 190.173 54.216 189.064 54.216C187.954 54.216 187.25 54.6427 186.952 55.496C186.653 56.3493 186.504 58.1413 186.504 60.872V62.408C186.504 65.4373 186.653 67.4 186.952 68.296C187.25 69.192 187.933 69.64 189 69.64C190.109 69.64 190.813 69.192 191.112 68.296C191.41 67.4 191.56 65.5653 191.56 62.792V60.936C191.56 58.1627 191.41 56.3493 191.112 55.496ZM203.912 55.432C203.912 52.3173 204.851 49.9067 206.728 48.2C208.648 46.4507 211.272 45.576 214.6 45.576C217.928 45.576 221.299 46.0027 224.712 46.856L223.624 55.752C219.272 54.7707 216.35 54.28 214.856 54.28C213.96 54.28 213.512 54.6427 213.512 55.368C213.512 55.8373 214.003 56.264 214.984 56.648C218.398 57.8853 220.958 59.2933 222.664 60.872C224.414 62.4507 225.288 64.8187 225.288 67.976C225.288 71.1333 224.478 73.544 222.856 75.208C221.235 76.8293 218.739 77.64 215.368 77.64C212.04 77.64 208.712 77.2133 205.384 76.36L206.088 67.72C210.355 68.872 213.107 69.448 214.344 69.448C215.624 69.448 216.264 69.1493 216.264 68.552C216.264 67.9547 215.795 67.4853 214.856 67.144C211.059 65.6933 208.286 64.1573 206.536 62.536C204.787 60.872 203.912 58.504 203.912 55.432ZM240.251 54.728C239.142 54.728 238.417 55.112 238.075 55.88C237.734 56.6053 237.563 57.736 237.563 59.272H243.131V57.736C243.131 55.7307 242.171 54.728 240.251 54.728ZM240.507 45.576C244.902 45.576 248.038 46.6427 249.915 48.776C251.835 50.8667 252.795 53.8747 252.795 57.8C252.795 58.312 252.646 60.616 252.347 64.712H237.755C237.755 67.912 239.227 69.512 242.171 69.512C243.579 69.512 246.331 69.0213 250.427 68.04L251.323 75.976C247.739 77.0853 244.155 77.64 240.571 77.64C236.177 77.64 232.806 76.2107 230.459 73.352C228.113 70.4507 226.939 66.5253 226.939 61.576C226.939 50.9093 231.462 45.576 240.507 45.576Z" fill="black" />
                    <line x1="39.7277" y1="87.1681" x2="92.1681" y2="34.7276" stroke="black" strokeWidth="12" strokeLinecap="round" />
                    <line x1="40.9019" y1="33.5091" x2="93.3423" y2="85.9496" stroke="black" strokeWidth="12" strokeLinecap="round" />
                </g>
            </svg>
            <nav
                role="navigation"
                className="mobile-nav-links"
                style={{ backgroundColor: backgrounds[arrIndex] }}
            >
                {props.links.map(link => (
                    <span key={link[1]} className="list-item-link">
                        <Link to={link[1]} className="link" title={`Go to the "${link[1]}" page.`} onClick={props.menuToggle}>{link[0]}</Link>
                    </span>))}
            </nav>
            <svg className="thermostat" viewBox="0 0 645 404" fill="none" xmlns="http://www.w3.org/2000/svg">

                <rect width="645" height="404" rx="25" fill="#CFCFCF" />
                <rect x="24" y="22" width="597" height="360" rx="25" fill="#D8D8D8" />
                <path d="M109 99C109 85.1929 120.193 74 134 74H425V330H134C120.193 330 109 318.807 109 305V99Z" fill="#B0B8CD" />
                <path className="temp-up" onClick={increment} d="M425 74H511C524.807 74 536 85.1929 536 99V202H425V74Z" fill="#C4C4C4" />
                <path className="temp-down" onClick={decrement} d="M425 202H536V305C536 318.807 524.807 330 511 330H425V202Z" fill="#C4C4C4" />
                <line x1="439" y1="200.5" x2="521" y2="200.5" stroke="black" strokeWidth="3" />
                <path className="temp-up" onClick={increment} d="M480.5 109V159M455 135.5H507" stroke="black" strokeWidth="5" />
                <line className="temp-down" onClick={decrement} x1="457" y1="263.5" x2="507" y2="263.5" stroke="black" strokeWidth="5" />
                <text className="text" x="133" y="150">Current Temp (F)</text>
                <text className="current-temp" x="220" y="250">{currentTemp}</text>
                <text className="warning-max" x="139" y="300">Maximum Temperature!</text>
                <text className="warning-min" x="141" y="300">Minimum Temperature!</text>
            </svg>

        </div>
    )
}

export default Menu

const ScrollToTop = () => {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}