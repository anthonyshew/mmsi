import React, { useEffect } from 'react'
import gsap from 'gsap'
import './_EmailIcon.scss'

const EmailIcon = (props) => {

    useEffect(() => {
        gsap.timeline({ repeat: 'infinite' })
            .to(".email-icon", {
                rotate: 2,
                yoyo: true,
                repeat: 1,
                delay: 2
            })
            .to(".email-icon", {
                rotate: -2,
                yoyo: true,
                repeat: 1,
            })
    }, [])

    return (
        <>
            <svg className="email-icon" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M199.5 149.229L119.629 74.6452L199.5 1.26436V149.229ZM1.69034 1H198.31L100 91.321L1.69034 1ZM119.478 74.7839L118.935 75.3654L198.325 149.5H1.67516L81.0652 75.3654L80.5224 74.7842L99.6617 92.3682L100 92.679L100.338 92.3682L119.478 74.7839ZM0.5 1.26436L80.3713 74.6453L0.5 149.229V1.26436Z" strokeWidth="6" />
            </svg>
        </>
    )
}

export default EmailIcon