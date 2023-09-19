import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <>
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul id='nav-LinksId' className="nav-links">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/experence">Experience</Link></li>
            <li><Link to="/project">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2023 Rohit Rannu. All Rights Reserved.</p>
    </footer>
    </>
  )
}
