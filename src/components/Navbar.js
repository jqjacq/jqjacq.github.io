import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav-container rightAlign w3-animate-left">
            <Link to="/" className="links"> About Me </Link> 
            <Link to="/projects" className="links"> My Projects </Link>
            <Link to="/contact" className="links"> Contact Me</Link>
    </nav>
  )
}
