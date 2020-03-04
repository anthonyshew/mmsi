import { useEffect } from 'react'

import { initialState } from '../../lib/state/state'
import useStateValue from '../../lib/hooks/useStateValue'

const LocalStorageManager = (props) => {

    const [state, dispatch] = useStateValue()

    const loadLocalStorage = () => {
        try {
            const serializedState = localStorage.getItem('state')
            if (serializedState === null) {
                return undefined
            }
            return JSON.parse(serializedState)
        } catch (err) {
            return undefined
        }
    }

    const createLocalStorage = initialState => {
        try {
            const serializedInitialState = JSON.stringify(initialState)
            localStorage.setItem('state', serializedInitialState)
        } catch (err) {
            // Ignore write errors
        }
    }

    useEffect(() => {
        if (localStorage.getItem('state') === null) {
            createLocalStorage(initialState)
        }
        dispatch({
            type: 'loadLocalStorage',
            localStorageState: loadLocalStorage()
        })
    }, [dispatch])

    useEffect(() => {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    }, [state])

    return null
}

export default LocalStorageManager