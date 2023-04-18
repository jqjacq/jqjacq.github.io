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
          <p> 
            <h6 className="bold"> 
            {project.id}. {project.projecttype}: {project.name}
            </h6>
            <hr></hr>
            <p className="project-description">
              {project.description}
            </p>
          </p>
      </div>
      ))}
      </div>
    </>
  )
}
