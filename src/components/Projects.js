import React, { useState, useEffect } from 'react'
import projData from '../data/projects.js'

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projData)
  }, [])

  return (
    <>
    <header className="centerText w3-animate-left bold"> My Projects </header>
    <div className="project-container containerPad">
      {projects.map(project => (
        <div className="project-grid" key={project.id}>
            <img className="project-images"                          
              src={project.img} 
              alt={project.name}></img>
          <p class="project-details"> 
            <hr></hr>
            <h4 className="bold centerText uppercase"> 
              {project.projecttype}: <h5>{project.name}</h5>
            </h4>
            <hr></hr>
            <h6 className="project-description" >
              {project.description}
            </h6>
              <p class="language bold centerText">
                <span class="language rightMargin"> {project.language} </span>
                <span class="framework">{project.framework}</span>
              </p>
              <p class="codelink bold centerText">
                <a target="_blank " href={`https://github.com/jqjacq/${project.link}`}> 
                Code <i class="fa fa-github"></i>
                </a>
                <span class="rightMargin"></span>
                <a target=
                "_blank " className={`${project.className}`} href={`https://jqjacq.github.io/${project.link}`}>
                  Website <i class="fa-solid fa-right-to-bracket"></i>
                </a>
              </p>
          </p>
      </div>
      ))}
      </div>
    </>
  )
}
