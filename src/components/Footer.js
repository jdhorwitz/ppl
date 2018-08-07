import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Proud Parents of Loss</h2>
      <p>Founded with love by Josh and Amber Horwitz</p>
      <ul className="actions">
        <li>
          <Link to="/generic" className="button">
            Learn More
          </Link>
        </li>
      </ul>
    </section>
    <section>
      <h2>Contact Us</h2>
      <dl className="alt">
        <dt>Address</dt>
        <dd>Ann Arbor, MI</dd>
        <dt>Phone</dt>
        <dd>(734) 678-5248</dd>
        <dt>Email</dt>
        <dd>
          <a href="#">amber@proudparentsofloss.org</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://www.facebook.com/ProudParentsOfLoss/"
            className="icon fa-facebook alt"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">&copy;2018 Proud Parents of Loss.</p>
  </footer>
)

export default Footer
