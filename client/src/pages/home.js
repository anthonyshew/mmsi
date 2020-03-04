import React from 'react'
import { Link } from '@reach/router'

const Home = ({ ...props }) => {
    return (
        <div className="">
            <Link to="/about">Take me to the about.</Link>
            Make something great with the home component here!
    </div>
    )
}

export default Home