import React from 'react'
import { Link } from "react-router-dom"
import Media from './Media'
export default function Navbar() {
  return (
    <>
    <nav className="nav-container centerText w3-animate-left">
            <Link to="/" className="rightMargin links"> About </Link> 
            <Link to="/projects" className="rightMargin links"> Portfolio </Link>
            <Link to="/resume" className="rightMargin links"> Resume </Link>
            <Link to="/contact" className="rightMargin links"> Contact </Link>
    </nav>
    <footer className="footer-container">
      <Media />
      <p className="centerText"> Jacqueline Xu © 2022</p>
    </footer>
    </>
  )
}
