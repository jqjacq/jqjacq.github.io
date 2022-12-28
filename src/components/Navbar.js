import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav-container centerText w3-animate-left">
            <Link to="/" className="rightMargin links"> About Me </Link> 
            <Link to="/projects" className="rightMargin links"> Portfolio </Link>
            <Link to="/resume" className="rightMargin links"> Resume </Link>
            <Link to="/skills" className="rightMargin links"> Skills </Link>
            <Link to="/contact" className="rightMargin links"> Contact Me</Link>
          <span className="media rightAlign">
            <a href="https://www.github.com/jqjacq" alt="Github">
              <i className="fa-brands fa-2x fa-github socialmedia rightMargin"></i>
            </a>
            <a href="https://www.linkedin.com" alt="LinkedIn">
              <i className="fa-brands fa-2x fa-linkedin socialmedia rightMargin"></i>
            </a>
            <a href="mailto:xujacque@gmail.com" alt="Email Address">
              <i className="fa-solid fa-2x fa-envelope socialmedia"></i>
            </a>
          </span>
    </nav>
  )
}
