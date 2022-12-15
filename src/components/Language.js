import React from 'react'

export default function Language() {
  return (
    <div class="gridbox">
      <div class="skills-container w3-animate-left">
      <header class="centerText">Skills</header>
        <p class="skillbar">
          <span class="skills">JavaScript </span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript" width="25" height="25"/>
          <progress max="100" value="65" data-value="65"> 
          </progress>
        </p>
        <p class="skillbar">
          <span class="skills">HTML </span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="html" width="25" height="25"/>
          <progress max="100" value="100"></progress>
        </p>
        <p class="skillbar">
            <span class="skills">CSS </span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="css3" width="25" height="25"/>
          <progress max="100" value="100"></progress>
        </p>
        <p class="skillbar">
            <span class="skills">NodeJS</span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="nodejs" width="25" height="25"/>
          <progress max="100" value="80"></progress>
        </p>
        <p class="skillbar">
            <span class="skills">Git </span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" width="25" height="25"/>
          <progress max="100" value="80"></progress>
        </p>
      </div>
      <div class="framework-container w3-animate-right">
      <header class="centerText">Frameworks</header>
          <p class="skillbar">
              <span class="skills">React</span>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="react" width="25" height="25"/>
            <progress max="100" value="65"></progress>
          </p>
          <p class="skillbar">
              <span class="skills">Bootstrap</span> 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" alt="bootstrap" width="25" height="25"/>
            <progress max="100" value="90"></progress>
          </p>
          <p class="skillbar">
              <span class="skills">SASS </span>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="sass" width="25" height="25"/>
            <progress max="100" value="90"></progress>
          </p>
          <p class="skillbar">
              <span class="skills">MaterialUI</span> 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="materialui" width="25" height="25"/>
              <progress max="100" value="80"></progress>
          </p>
        </div>
      </div>
      )
    }
          //  <span><i class="fa-brands fa-js"></i>JavaScript</span>
          //   <span><i class="fa-brands fa-html5"></i>HTML</span>
          //   <span><i class="fa-brands fa-css3-alt"></i>CSS</span>
          //   <span><i class="fa-brands fa-react"></i>React</span>
          //   <span><i class="fa-brands fa-bootstrap"></i>Bootstrap</span>
          //   <span><i class="fa-brands fa-sass"></i>SASS</span>
          //   <span><i class="fa-solid fa-m"></i>Material UI</span>
          //   <span><i class="fa-brands fa-node-js"></i>NodeJS</span>
          //   <span><i class="fa-brands fa-npm"></i>npm</span>
          //   <span><i class="fa-brands fa-git"></i>Git</span>
