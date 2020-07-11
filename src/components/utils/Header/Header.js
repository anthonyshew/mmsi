import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import './_Header.scss'

const Header = ({
    containerName,
    background,
    backgroundSize,
    backgroundPosition,
    height,
    dimmer,
    slideshow,
    children
}) => {
    return (
        <header
            className={`header-${containerName} header`}
            style={{
                backgroundImage: background ? `url(${background})` : null,
                backgroundSize: `${backgroundSize || 'cover'}`,
                backgroundPosition: `${backgroundPosition || 'center'}`,
                backgroundRepeat: 'no-repeat',
                height: height ? height : null
            }}
        >
            {slideshow ? <Slideshow slides={slideshow[0]} interval={slideshow[1]} /> : null}
            {dimmer ? <span className="background-dimmer"></span> : null}
            {children}
        </header>
    )
}

export default Header

const Slideshow = ({ slides, interval, children }) => {

    const [arrIndex, setArrIndex] = useState(0)
    const [animsCompleted, setAnimsCompleted] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            gsap.timeline()
                .addLabel('start', 0)
                .to(`.header-slide-${arrIndex}`, {
                    duration: 2,
                    x: "-100%",
                }, 'start')
                .to(`.header-slide-${(arrIndex + 1) % slides.length}`, {
                    duration: 2,
                    x: "0",
                }, 'start')
                .then(res => {
                    setAnimsCompleted(animsCompleted => animsCompleted + 1)
                    setArrIndex((arrIndex + 1) % slides.length)
                })
        }, interval - 2)
    }, [arrIndex, slides, interval])

    useEffect(() => {
        const parentNode = document.querySelector(".container-slideshow")
        const toAdd = document.createElement("div")
        toAdd.classList.add(`header-slide`)
        toAdd.classList.add(`header-slide-${(arrIndex + 1) % slides.length}`)
        toAdd.setAttribute("style", `width: 100%; height: 100%; background-image: url("${slides[(arrIndex + 1) % slides.length]}"); transform: translateX(100%);`)
        parentNode.appendChild(toAdd)
    }, [arrIndex, slides])

    useEffect(() => {
        if (animsCompleted > 0) {
            const parentNode = document.querySelector(".container-slideshow")
            parentNode.removeChild(parentNode.childNodes[0])
        }
    }, [animsCompleted])

    return (
        <span className="container-slideshow">
            <HeaderSlide
                className={`header-slide-${arrIndex}`}
                backgroundImage={slides[arrIndex]}
            />
        </span>
    )

}

const HeaderSlide = ({ className, backgroundImage, styles, children }) => {
    return (
        <div
            className={`header-slide${className ? " " + className : ""}`}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                ...styles,
            }}
        >
            {children}
        </div>
    )
}