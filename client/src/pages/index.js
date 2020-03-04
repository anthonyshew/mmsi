import React from "react"
import { Link } from '@reach/router'

import useStateValue from '../lib/hooks/useStateValue'

export default () => {

    const [{ color }, dispatch] = useStateValue()

    const handleClick = (e) => {
        dispatch({ type: "COLOR_CHANGE", color: e.target.innerHTML })
    }

    return (
        <div className="">
            <Link to="/about">Take me to the about.</Link>
            <Link to="/protectedroute">Take me to a protected route.</Link>
            <p>My favorite color is {color}.</p>
            <button onClick={handleClick}>blue</button>
            <button onClick={handleClick}>green</button>
            <button onClick={handleClick}>yellow</button>
        </div>
    )
}
