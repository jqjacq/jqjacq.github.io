import React from 'react'
import { Link } from "react-router-dom"

export default function About() {
  return (
    <>
    <div className="about-container containerPad">
        <img className="flower w3-animate-left" src="../img/aflower.png" alt="Rainbow Flower" />
        <div className="intro w3-animate-opacity">
            <h1 className=" w3-animate-right"> Hello, 👋</h1>
            <h4 className=" w3-animate-left"> I'm Jacqueline. 😊 I go by JQ. </h4>
            <h6 className=" w3-animate-right"> I'm a self-taught front end developer from NYC. 🗽</h6>
            <h6>Check out my <Link to="/projects" className="links"> projects </Link>
            and my <Link to="/resume" className="links">resume</Link>!
            </h6>
        <br></br>
        <p className="bold skills-container">Language/Frameworks</p>
          <img className="icons"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50"/>
          <img className="icons"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="html" width="50" height="50"/>
          <img className="icons"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="css3" width="50" height="50"/>
          <img className="icons"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="react" width="50" height="50"/>
          <img className="icons"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" alt="bootstrap" width="50" height="50"/>
          <img className="icons"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="sass" width="50" height="50"/>
          <img className="icons"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="materialui" width="50" height="50"/>
        </div>
    </div>
    </>
  ) 
}
