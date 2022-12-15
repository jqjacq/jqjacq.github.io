import React from 'react'

export default function Language() {
  return (
    <div className="gridbox">
      <div className="skills-container">
      <header className="centerText">Skills</header>
        <p>
          <span className="skills">JavaScript </span>
          <img className="skillicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript" width="30" height="30"/>
          <progress max="100" value="65" data-value="65"> 
          </progress>
        </p>
        <p>
          <span className="skills">HTML </span>
          <img className="skillicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="html" width="30" height="30"/>
          <progress max="100" value="100"></progress>
        </p>
        <p>
            <span className="skills">CSS </span>
          <img className="skillicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="css3" width="30" height="30"/>
          <progress max="100" value="100"></progress>
        </p>
        <p>
            <span className="skills">NodeJS</span>
          <img className="skillicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="nodejs" width="30" height="30"/>
          <progress max="100" value="80"></progress>
        </p>
        <p>
            <span className="skills">Git </span>
          <img className="skillicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" width="30" height="30"/>
          <progress max="100" value="80"></progress>
        </p>
      </div>
      <div className="framework-container">
      <header className="centerText">Frameworks</header>
          <p>
              <span className="skills">React</span>
            <img className="skillicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="react" width="30" height="30"/>
            <progress max="100" value="65"></progress>
          </p>
          <p>
              <span className="skills">Bootstrap</span> 
            <img className="skillicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" alt="bootstrap" width="30" height="30"/>
            <progress max="100" value="90"></progress>
          </p>
          <p>
              <span className="skills">SASS </span>
            <img className="skillicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="sass" width="30" height="30"/>
            <progress max="100" value="90"></progress>
          </p>
          <p>
              <span className="skills">Material UI</span> 
            <img className="skillicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="materialui" width="30" height="30"/>
              <progress max="100" value="80"></progress>
          </p>
        </div>
      </div>
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
