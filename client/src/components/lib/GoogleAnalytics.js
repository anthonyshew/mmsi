import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'
import { Route } from 'react-router-dom'

const GoogleAnalytics = (props) => {
    const location = useLocation()

    useEffect(() => {
        const logPageChange = (pathname, search = '') => {
            const page = pathname + search
            const { location } = window
            ReactGA.set({
                page,
                location: `${location.origin}${page}`,
                ...props.options
            })

            ReactGA.pageview(page)
        }

        logPageChange(location.pathname, location.search)
    }, [location.pathname, location.search, props.options])

    return null
}

const RouteTracker = () => <Route component={GoogleAnalytics} />

const init = (options = {}) => {
    const isGAEnabled = process.env.NODE_ENV === 'production'

    if (isGAEnabled) ReactGA.initialize("UA-151380188-1")

    return isGAEnabled
}

GoogleAnalytics.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
        search: PropTypes.string
    }).isRequired,
    options: PropTypes.object
}

export default {
    GoogleAnalytics,
    RouteTracker,
    init
}