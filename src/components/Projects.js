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
              {project.projecttype}: {project.name}
            </h6>
            <p className="project-description">
              {project.description}
            </p>
          </p>
      </div>
      ))}
      </div>
      {/* <div className="project-grid rig                                              htMargin">
          <img className="project-images" src="../img/project2.jpg" alt="Habit Hamster Keep Track of Your Goals"></img>
        <p className="project-description"> 
            <h6 className="bold">Team Project: Habit Hamster</h6>
            <span> This is a collaborative project designed to help users build better habits. 
              I am working on the front end. 
              My partner is responsible for handling the back end. 
              We strive to make this project compatible with multiple platforms: websites, mobile, and smartwatches.
              </span>
        </p>
      </div>
      <div className="project-grid rightMargin">
        <img className="project-images" alt="To Do List"></img>
          <p className="project-description"> 
          <h6 className="bold"> To Do List </h6>
          <span>Description here.</span>
        </p>
      </div> */}
    </>
  )
}
