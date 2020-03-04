import React, { useEffect } from 'react'
import gsap from 'gsap'
import './_PencilAndSquare.scss'

const PencilAndSquare = (props) => {

    useEffect(() => {

        const animDown = {
            duration: 1.5,
            attr: { y2: 228 },
            ease: 'none'
        }

        const animUp = {
            duration: 1.5,
            attr: { y2: 213 },
            ease: 'none'
        }

        gsap.timeline({ repeat: 'infinite' })
            .to(".line-1", animDown)
            .to(".line-1", animUp)
            .to(".line-3", animDown)
            .to(".line-3", animUp)
            .to(".line-2", animDown)
            .to(".line-2", animUp)
            .to(".line-5", animDown)
            .to(".line-5", animUp)
            .to(".line-4", animDown)
            .to(".line-4", animUp)
    }, [])

    return (
        <>
            <svg className="svg-pencil-and-square" viewBox="0 0 261 261" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M210 18L210 228H0L210 18ZM185.507 196.5V81L69.5067 196.5H185.507Z" />
                <line className="line-1" x1="52.5067" y1="228" x2="52.5067" y2="213" stroke="white" strokeWidth="4" />
                <line className="line-2" x1="82.5067" y1="228" x2="82.5067" y2="213" stroke="white" strokeWidth="4" />
                <line className="line-3" x1="112.507" y1="228" x2="112.507" y2="213" stroke="white" strokeWidth="4" />
                <line className="line-4" x1="142.507" y1="228" x2="142.507" y2="213" stroke="white" strokeWidth="4" />
                <line className="line-5" x1="172.507" y1="228" x2="172.507" y2="213" stroke="white" strokeWidth="4" />
                <rect x="47.3762" y="19.799" width="271" height="39" transform="rotate(45 47.3762 19.799)" stroke={props.fill} />
                <path d="M239.709 211.425L245.071 248.49L211.425 239.709L239.709 211.425Z" />
                <path d="M21.2132 7.07107C25.1185 3.16582 31.4501 3.16582 35.3554 7.07107L47.3762 19.0919L19.0919 47.3762L7.0711 35.3553C3.16586 31.4501 3.16586 25.1184 7.0711 21.2132L21.2132 7.07107Z" />
            </svg>
        </>
    )
}

export default PencilAndSquare