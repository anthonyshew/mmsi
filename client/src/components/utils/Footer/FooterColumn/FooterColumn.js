import React from 'react'
import { Link } from '@reach/router'
import './_FooterColumn.scss'

const FooterColumn = (props) => {
    return (
        <span className="footer-column" style={{ backgroundColor: props.backgroundColor || 'none', color: props.color || '#000000' }}>
            {props.heading ? <h3 className="h3">{props.heading}</h3> : null}
            <ul className="link-list">
                {props.links.map((link) => {
                    return <Link key={link[1]} to={link[0]} title={`Go to the "${link[1]}" page.`}>
                        <li className="link" style={{ color: props.linkColor }}>
                            {link[1]}
                        </li>
                    </Link>
                })}
            </ul>
        </span>
    )
}

export default FooterColumn