import React from 'react'

export default function Skills() {
  return (
    <>
      <div className="gridbox">
        <div className="skills-container w3-animate-left">
      <header className="centerText bold w3-animate-left">Skills</header>
          <p className="skillbar">
          <span className="skills">JavaScript </span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript" width="25" height="25"/>
          <progress max="100" value="65" data-value="65"> 
          </progress>
        </p>
        <p className="skillbar">
          <span className="skills">HTML </span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="html" width="25" height="25"/>
          <progress max="100" value="100"></progress>
        </p>
        <p className="skillbar">
            <span className="skills">CSS </span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="css3" width="25" height="25"/>
          <progress max="100" value="100"></progress>
        </p>
        <p className="skillbar">
            <span className="skills">NodeJS</span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="nodejs" width="25" height="25"/>
          <progress max="100" value="80"></progress>
        </p>
        <p className="skillbar">
            <span className="skills">Git </span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" width="25" height="25"/>
          <progress max="100" value="80"></progress>
        </p>
      </div>
      <div className="framework-container w3-animate-right">
      <header className="centerText bold">Frameworks/Libraries</header>
          <p className="skillbar">
              <span className="skills">React</span>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="react" width="25" height="25"/>
            <progress max="100" value="65"></progress>
          </p>
          <p className="skillbar">
              <span className="skills">Bootstrap</span> 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" alt="bootstrap" width="25" height="25"/>
            <progress max="100" value="90"></progress>
          </p>
          <p className="skillbar">
              <span className="skills">SASS </span>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="sass" width="25" height="25"/>
            <progress max="100" value="90"></progress>
          </p>
          <p className="skillbar">
              <span className="skills">MaterialUI</span> 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="materialui" width="25" height="25"/>
              <progress max="100" value="80"></progress>
          </p>
        </div>
      </div>
      </>
      )
    }
          //  <span><i className="fa-brands fa-js"></i>JavaScript</span>
          //   <span><i className="fa-brands fa-html5"></i>HTML</span>
          //   <span><i className="fa-brands fa-css3-alt"></i>CSS</span>
          //   <span><i className="fa-brands fa-react"></i>React</span>
          //   <span><i className="fa-brands fa-bootstrap"></i>Bootstrap</span>
          //   <span><i className="fa-brands fa-sass"></i>SASS</span>
          //   <span><i className="fa-solid fa-m"></i>Material UI</span>
          //   <span><i className="fa-brands fa-node-js"></i>NodeJS</span>
          //   <span><i className="fa-brands fa-npm"></i>npm</span>
          //   <span><i className="fa-brands fa-git"></i>Git</span>
