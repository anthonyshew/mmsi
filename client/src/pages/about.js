import React from "react"
import { Link } from '@reach/router'

import useStateValue from '../lib/hooks/useStateValue'


export default () => {

    const [{ color }] = useStateValue()


    return (
        <div>
            <Link to="/">Take me home.</Link>
            <p>My favorite color is {color}.</p>
        </div>
    )
}
