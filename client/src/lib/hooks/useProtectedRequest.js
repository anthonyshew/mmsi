import { useEffect } from 'react'
import useStateValue from './useStateValue'

const useProtectedRequest = (fetchUrl, setState, responseKey) => {

    const [, dispatch] = useStateValue()

    useEffect(() => {
        fetch(fetchUrl, {
            headers: {
                'Authorization': localStorage.getItem('jwt')
            }
        })
            .then(response => response.json())
            .then(json => {
                if (json.statusCode === 401) {
                    dispatch({
                        type: 'authLogout',
                        boolean: false
                    })
                    localStorage.removeItem('jwt')
                }
                setState(json[responseKey])
            })
    }, [dispatch, fetchUrl, setState, responseKey])
}

export default useProtectedRequest