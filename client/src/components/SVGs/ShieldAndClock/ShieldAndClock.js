import React, { useEffect } from 'react'
import gsap from 'gsap'
import './_ShieldAndClock.scss'

const ShieldAndClock = (props) => {

    useEffect(() => {
        gsap.to(".seconds-hand", {
            duration: 60,
            rotate: 360,
            transformOrigin: '0% 100%',
            ease: 'none',
            repeat: 'infinite'
        })
    }, [])

    return (
        <>
            <svg className="dependability" viewBox="0 0 472 549" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M236 4C162.953 64.0853 112.882 90.5608 3 121.5C47.9602 411.669 106.243 484.835 236 545.5C365.757 484.835 424.04 411.669 469 121.5C359.118 90.5608 309.047 64.0853 236 4ZM354.061 342.05C366.72 321.001 374 296.351 374 270C374 269.833 374.001 269.667 374 269.5C373.912 244.288 367.159 220.647 355.412 200.245C343.053 178.78 325.166 160.902 303.695 148.553C283.172 136.75 259.374 130 234 130C233.833 130 233.667 129.999 233.5 130C207.651 130.09 183.453 137.187 162.705 149.488C141.635 161.98 124.122 179.84 112.052 201.185C100.559 221.507 94 244.987 94 270C94 270.167 93.9994 270.333 94 270.5C94.0874 295.504 100.73 318.964 112.299 339.25C124.387 360.449 141.854 378.183 162.842 390.593C183.56 402.845 207.709 409.91 233.5 410C233.667 410.001 233.833 410 234 410C259.622 410 283.636 403.117 304.295 391.099C324.732 379.211 341.885 362.296 354.061 342.05Z" fill="#131241" />
                <path d="M374 270C374 296.351 366.72 321.001 354.061 342.05M374 270C374 269.833 374.001 269.667 374 269.5M374 270C374 244.601 367.236 220.781 355.412 200.245M234 410C233.833 410 233.667 410.001 233.5 410M234 410C259.622 410 283.636 403.117 304.295 391.099M234 410C208.021 410 183.694 402.924 162.842 390.593M94 270C94 244.987 100.559 221.507 112.052 201.185M94 270C94 270.167 93.9994 270.333 94 270.5M94 270C94 295.191 100.653 318.828 112.299 339.25M234 130C259.374 130 283.172 136.75 303.695 148.553M234 130C233.833 130 233.667 129.999 233.5 130M234 130C207.963 130 183.587 137.108 162.705 149.488M233.5 150V130M233.5 130C207.651 130.09 183.453 137.187 162.705 149.488M303.761 148.437L303.695 148.553M293.761 165.758L303.695 148.553M355.644 200.11L355.412 200.245M338.324 210.11L355.412 200.245M354.079 342.06L354.061 342.05M336.759 332.06L354.061 342.05M304.567 391.571L304.295 391.099M294.567 374.25L304.295 391.099M162.567 391.07L162.842 390.593M172.567 373.75L162.842 390.593M111.75 339.567L112.299 339.25M129.071 329.567L112.299 339.25M128.07 210.433L112.052 201.185M110.75 200.433L112.052 201.185M172.567 166.57L162.705 149.488M162.567 149.25L162.705 149.488M354 269.5H374M374 269.5C373.912 244.288 367.159 220.647 355.412 200.245M233.5 390V410M233.5 410C207.709 409.91 183.56 402.845 162.842 390.593M114 270.5H94M94 270.5C94.0874 295.504 100.73 318.964 112.299 339.25M354.061 342.05C341.885 362.296 324.732 379.211 304.295 391.099M355.412 200.245C343.053 178.78 325.166 160.902 303.695 148.553M162.705 149.488C141.635 161.98 124.122 179.84 112.052 201.185M112.299 339.25C124.387 360.449 141.854 378.183 162.842 390.593M3 121.5C112.882 90.5608 162.953 64.0853 236 4C309.047 64.0853 359.118 90.5608 469 121.5C424.04 411.669 365.757 484.835 236 545.5C106.243 484.835 47.9602 411.669 3 121.5Z" stroke="#131241" strokeWidth="5" />
                <line x1="234.652" y1="277.106" x2="184.652" y2="245.106" stroke="#131241" strokeWidth="5" />
                <line className="seconds-hand" x1="232.267" y1="277.995" x2="316.267" y2="197.198" stroke="#131241" strokeWidth="5" />
            </svg>

        </>
    )
}

export default ShieldAndClock