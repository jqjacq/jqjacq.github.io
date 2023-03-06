import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav-container centerText w3-animate-left">
            <Link to="/" className="rightMargin links"> About Me </Link> 
            <Link to="/projects" className="rightMargin links"> Portfolio </Link>
            <Link to="/resume" className="rightMargin links"> Resume </Link>
            <Link to="/contact" className="rightMargin links"> Contact Me</Link>
    </nav>
  )
}
