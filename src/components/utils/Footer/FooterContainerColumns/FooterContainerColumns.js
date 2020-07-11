import React from 'react'
import './_FooterContainerColumns.scss'

const FooterContainerColumns = (props) => {
    return (
        <div className="footer-container-columns" style={{ backgroundColor: props.backgroundColor || "none" }}>
            {props.children}
        </div>
    )
}

export default FooterContainerColumns