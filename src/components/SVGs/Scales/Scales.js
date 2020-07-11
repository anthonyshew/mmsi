import React, { useEffect } from 'react'
import gsap from 'gsap'
import './_Scales.scss'

const Scales = (props) => {

    useEffect(() => {
        gsap.timeline({ repeat: 'infinite' })
            .addLabel("startRight", 3)
            .addLabel("startLeft", 6)
            .to(".crossbar", {
                duration: 1.5,
                rotate: 5,
                transformOrigin: "50% 50%",
                yoyo: true,
                repeat: 1
            }, "startRight")
            .to(".scale-right", {
                duration: 1.5,
                y: 18,
                yoyo: true,
                repeat: 1
            }, "startRight")
            .to(".scale-left", {
                duration: 1.5,
                y: -18,
                yoyo: true,
                repeat: 1
            }, "startRight")
            .to(".crossbar", {
                duration: 1.5,
                rotate: -5,
                transformOrigin: "50% 50%",
                yoyo: true,
                repeat: 1,
            }, "startLeft")
            .to(".scale-right", {
                duration: 1.5,
                y: -18,
                yoyo: true,
                repeat: 1
            }, "startLeft")
            .to(".scale-left", {
                duration: 1.5,
                y: 18,
                yoyo: true,
                repeat: 1
            }, "startLeft")
    }, [])

    return (
        <>
            <svg className="scales" viewBox="0 0 592 498" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g className="scale-right">
                    <path d="M489.536 39.1131L494.067 37L578.591 218.262L574.059 220.375L489.536 39.1131Z" />
                    <path d="M489.536 39.11L494.067 41.2231L409.544 222.485L405.012 220.372L489.536 39.11Z" />
                    <path d="M581.536 214.5C587.058 214.5 591.589 218.989 591.024 224.483C588.74 246.674 578.895 267.526 562.979 283.443C544.694 301.728 519.894 312 494.036 312C468.177 312 443.378 301.728 425.093 283.443C409.176 267.526 399.331 246.674 397.048 224.483C396.482 218.989 401.013 214.5 406.536 214.5H581.536Z" />
                </g>
                <g className="scale-left">
                    <path d="M92.5356 39.1131L97.0672 37L181.591 218.262L177.059 220.375L92.5356 39.1131Z" />
                    <path d="M92.5356 39.11L97.0672 41.2231L12.5435 222.485L8.012 220.372L92.5356 39.11Z" />
                    <path d="M184.536 214.5C190.058 214.5 194.589 218.989 194.024 224.483C191.74 246.674 181.895 267.526 165.979 283.443C147.694 301.728 122.894 312 97.0357 312C71.177 312 46.3775 301.728 28.0927 283.443C12.1763 267.526 2.33116 246.674 0.0477613 224.483C-0.517549 218.989 4.0128 214.5 9.53565 214.5H184.536Z" />
                </g>
                <rect className="crossbar" x="70" y="28" width="450" height="20" />
                <path d="M494.536 458V488C494.536 493.523 490.058 498 484.536 498H104.536C99.0128 498 94.5356 493.523 94.5356 488V458C94.5356 452.477 99.0128 448 104.536 448H285.536V73.9218C269.154 69.9035 257 55.121 257 37.5C257 16.7893 273.789 0 294.5 0C315.211 0 332 16.7893 332 37.5C332 54.3699 320.86 68.638 305.536 73.3499V448H484.536C490.058 448 494.536 452.477 494.536 458Z" />
            </svg>

        </>
    )
}

export default Scales