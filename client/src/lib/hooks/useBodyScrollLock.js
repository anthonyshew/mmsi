import { useEffect } from 'react'

const useBodyScrollLock = () => {
    useEffect(() => {
        document.querySelector('body').style.position = 'fixed'
        document.querySelector('body').style.overflowY = 'scroll'

        return () => {
            document.querySelector('body').style.position = 'initial'
            document.querySelector('body').style.overflowY = 'initial'
        }
    }, [])
}

export default useBodyScrollLock