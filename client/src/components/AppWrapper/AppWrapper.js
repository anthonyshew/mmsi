import React from 'react'
import './_AppWrapper.scss'
import useViewportDimensions from '../../lib/hooks/useViewportDimensions'

import LocalStorageManager from '../lib/LocalStorageManager'
import CMSRequester from '../lib/CMSRequester'
import ScrollToTop from '../lib/ScrollToTop'

const AppWrapper = ({ children }) => {

    const [, viewportHeight] = useViewportDimensions()

    return (
        <div id="appWrapper" className="app-wrapper" style={{ height: viewportHeight }}>
            <LocalStorageManager />
            <CMSRequester />
            <ScrollToTop />
            {children}
        </div>
    )
}

export default AppWrapper