import { useEffect } from 'react'
import useStateValue from '../../lib/hooks/useStateValue'

const CMSRequester = () => {
    const [, dispatch] = useStateValue()

    useEffect(() => {
        fetch(`/api/cms/get-all`)
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: "GET_CONTENT",
                    content: res.data[0].content,
                    cmsId: res.data[0]._id
                })
            })
    }, [dispatch])
    return null
}

export default CMSRequester