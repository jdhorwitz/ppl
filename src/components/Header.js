import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Proud Parents of Loss</h1>
        <p>We've been there and we want to help.<br /></p>
    </header>
)

export default Header
