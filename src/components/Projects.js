import React, { useState, useEffect } from 'react'
import projData from '../data/projects.js'

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projData)
  }, [])

  return (
    <>
    <h1><header className="centerText w3-animate-left bold"> My Projects </header></h1>
    <div className="project-container">
      {projects.map(project => (
        <div className="project-grid" key={project.id}>
          <img className="project-images"                          
            src={project.img} 
            alt={project.name}>
          </img>
          <div className="project-details"> 
            <hr></hr>
            <h5 className="bold centerText uppercase project-type"> 
              {project.projecttype} 
            </h5>
            <h5 className="centerText project-name"> {project.name} </h5>
            <hr></hr>
            <h6 className="project-description" >
              {project.description}
            </h6>
            <div className="language bold centerText">
              <span className="language rightMargin"> {project.language} </span>
            <div className="codelink bold centerText">
              <a target="_blank " href={`https://github.com/jqjacq/${project.link}`}> 
              Code <i className="fa fa-github"></i>
              </a>
              <span className="rightMargin"></span>
              <a target=
              "_blank " className={`${project.className}`} href={`https://jqjacq.github.io/${project.link}`}>
                Website <i className="fa-solid fa-right-to-bracket"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      ))}
      </div>
    </>
  )
}
