import React from 'react'
import './_AppWrapper.scss'

import LocalStorageManager from '../lib/LocalStorageManager'
import CMSRequester from '../lib/CMSRequester'
import ScrollToTop from '../lib/ScrollToTop'

const AppWrapper = ({ children }) => {

    return (
        <div id="appWrapper" className="app-wrapper" style={{ height: "100vh" }}>
            <LocalStorageManager />
            <CMSRequester />
            <ScrollToTop />
            {children}
        </div>
    )
}

export default AppWrapper