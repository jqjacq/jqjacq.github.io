import React from 'react'
import { NavLink } from "react-router-dom"
import Media from './Media'
export default function Navbar() {
  return (
    <>
    <nav id="nav" className="nav-container centerText w3-animate-left">
            <NavLink exact to="/" className="rightMargin links" activeClassName="active-link"> About </NavLink> 
            <NavLink to="/projects" className="rightMargin links" activeClassName="active-link"> Portfolio </NavLink>
            <NavLink to="/resume" className="rightMargin links" activeClassName="active-link"> Resume </NavLink>
            <NavLink to="/contact" className="rightMargin links" activeClassName="active-link"> Contact </NavLink>
    </nav>
    <footer className="footer-container">
      <Media />
      <p className="centerText"> Jacqueline Xu © 2022</p>
    </footer>
    </>
  )
}
