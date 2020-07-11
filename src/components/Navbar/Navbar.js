import React, { useState } from 'react'
import { Link } from '@reach/router'
import './_Navbar.scss'

import Hamburger from './Hamburger/Hamburger'
import Menu from './Menu/Menu'
import FullLogo from '../SVGs/FullLogo/FullLogo'

const Navbar = (props) => {

  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

  const menuToggle = (e) => {
    mobileMenuIsOpen ? setMobileMenuIsOpen(false) : setMobileMenuIsOpen(true)
  }

  const links = [[`Home`, `/`],
  [`About Us`, `/about`],
  [`Our Projects`, `/work`],
  [`Contact Us`, `/contact`]]

  return (
    <nav className="navbar">
      {mobileMenuIsOpen ? <Menu links={links} menuToggle={menuToggle} /> : null}
      <span className="logo"><Link to="/" title="Visit the home page."><FullLogo /></Link></span>
      <Hamburger menuToggle={menuToggle} />
    </nav >
  )
}

export default Navbar
