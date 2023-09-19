import React from 'react'
import './Nav.css'
import { Link} from "react-router-dom";


export default function Navbar() {
 
  return (
    <> 
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand logo" to="/">Rohit Rannu</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav-links navbar-nav">
              <li >
                <Link aria-current="page" to="/about">About</Link>
              </li>
              <li >
                <Link to="/project">Project</Link>
              </li>
              <li >
                <Link  to="/experence">Experence</Link>
              </li>
              <li >
                <Link to="/contact">contact</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      
   
    </>
  )
}
