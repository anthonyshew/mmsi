import React, { useEffect } from 'react'
import gsap from 'gsap'
import './_PhoneIcon.scss'

const PhoneIcon = (props) => {

    useEffect(() => {
        gsap.timeline({ repeat: "infinite" })
            .to(".arc-small", {
                duration: .1,
                autoAlpha: 1,
                yoyo: true,
                repeat: 1,
                delay: 4
            })
            .to(".arc-medium", {
                duration: .1,
                autoAlpha: 1,
                yoyo: true,
                repeat: 1
            })
            .to(".arc-large", {
                duration: .1,
                autoAlpha: 1,
                yoyo: true,
                repeat: 1
            })
    }, [])

    return (
        <>
            <svg className="phone-icon" viewBox="0 0 297 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M130.648 112.354C138.708 104.294 93.0072 60.9316 81.2913 53.2537C78.3363 51.3171 74.4616 51.2799 71.399 53.0414C66.8648 55.6493 59.4132 62.2735 47.3968 80.234C26.6562 111.234 62.7758 169.815 113.235 221.911C165.332 272.37 223.922 308.481 254.923 287.741C272.883 275.724 279.507 268.273 282.115 263.739C283.877 260.676 283.84 256.801 281.903 253.846C274.225 242.13 228.581 194.167 220.521 202.228L194.965 227.783L105.092 137.91L130.648 112.354Z" strokeWidth="10" />
                <path className="arc-small" d="M113 56.4706C121.123 60.523 124.147 63.8967 127.706 71.2377" strokeWidth="10" strokeLinecap="round" />
                <path className="arc-medium" d="M120.584 36.0235C136.899 44.1632 142.975 50.9397 150.122 65.6847" strokeWidth="10" strokeLinecap="round" />
                <path className="arc-large" d="M126 12.7503C152.239 25.8408 162.01 36.739 173.503 60.4523" strokeWidth="10" strokeLinecap="round" />
            </svg>
        </>
    )
}

export default PhoneIcon