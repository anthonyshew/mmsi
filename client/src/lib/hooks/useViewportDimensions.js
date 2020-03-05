import { useState, useEffect } from 'react'

const useViewportDimensions = () => {
    if (typeof window !== 'undefined') {


        const [viewportsize, setViewportSize] = useState([window.innerWidth, window.innerHeight])
        useEffect(() => {
            const updateSize = () => setViewportSize([window.innerWidth, window.innerHeight])
            let timeout = false
            let delay = 150

            window.addEventListener("resize", () => {
                clearTimeout(timeout)
                timeout = setTimeout(updateSize, delay)
            })

            return () => window.removeEventListener("resize", updateSize)
        }, [])
        return viewportsize
    } else {
        return [0, 0]
    }
}

export default useViewportDimensions