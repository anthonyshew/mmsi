import React from 'react'
import './_AppWrapper.scss'
import useStateValue from '../../lib/hooks/useStateValue'
import useViewportDimensions from '../../lib/hooks/useViewportDimensions'

const AppWrapper = ({ children }) => {

    const [, viewportHeight] = useViewportDimensions()

    const [{ activeTheme }] = useStateValue()

    return (
        <div className={`app-wrapper theme-${activeTheme}`} style={{ minHeight: viewportHeight }}>
            {children}
        </div>
    )
}

export default AppWrapper