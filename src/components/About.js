import React from 'react'

export default function About() {
  return (
    <div className="about-container">
        <img className="flower w3-animate-left" src="../img/aflower.png" alt="Rainbow Flower" />
        <div className="intro w3-animate-opacity">
            <header className="intro1 w3-animate-right"> Hello, 👋</header>
            <br></br>
            <h2 className="intro2 w3-animate-left"> I'm Jacqueline. 😊 I go by JQ. </h2>
            <h3 className="intro3 w3-animate-right"> I'm a self-taught front end developer from NYC. 🗽 </h3>
        </div>
    </div>
  ) 
}
