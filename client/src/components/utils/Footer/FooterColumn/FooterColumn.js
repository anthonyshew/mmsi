import React from 'react'
import { Link } from '@reach/router'
import './_FooterColumn.scss'

const FooterColumn = (props) => {
    return (
        <span className="footer-column" style={{ backgroundColor: props.backgroundColor || 'none', color: props.color || '#000000' }}>
            {props.heading ? <h3 className="h3">{props.heading}</h3> : null}
            <ul className="link-list">
                {props.links.map((link) => {
                    return <li key={link[1]} className="link" style={{ color: props.linkColor }}>
                        <Link to={link[0]} title={`Go to the "${link[1]}" page.`}>
                            {link[1]}
                        </Link>
                    </li>
                })}
            </ul>
        </span >
    )
}

export default FooterColumn