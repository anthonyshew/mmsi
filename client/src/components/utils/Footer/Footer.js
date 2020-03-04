import React from 'react'
import './_Footer.scss'

import FooterContainerColumns from './FooterContainerColumns/FooterContainerColumns'
import FooterColumn from './FooterColumn/FooterColumn'

const Footer = (props) => {
    return (
        <footer className="footer" style={{ backgroundColor: props.backgroundColor }}>
            <h2 className="footer-title" style={{ color: props.headerColor }}>Mission Mechanical Services Inc.</h2>
            <FooterContainerColumns>
                <FooterColumn
                    links={[['/', 'Home']]}
                    linkColor={props.linkColor}
                />
                <FooterColumn
                    links={[['/about', 'About Us']]}
                    linkColor={props.linkColor}
                />
                <FooterColumn
                    links={[['/work', 'Our Projects']]}
                    linkColor={props.linkColor}
                />
                <FooterColumn
                    links={[['/contact', 'Contact Us']]}
                    linkColor={props.linkColor}
                />
                <FooterColumn
                    links={[['/terms-of-use', 'Terms of Use']]}
                    linkColor={props.linkColor}
                />
                <FooterColumn
                    links={[['/privacy-policy', 'Privacy Policy']]}
                    linkColor={props.linkColor}
                />
            </FooterContainerColumns>
        </footer>
    )
}




export default Footer