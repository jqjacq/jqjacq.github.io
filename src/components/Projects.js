import React from 'react'

export default function Projects() {
  return (
    <>
    <header className="centerText w3-animate-left bold"> My Projects </header>
    <div className="project-container">
      <div className="project-grid">
          <img className="project-images" src="../img/project1.png" alt="JQ's Tea & Coffee Ecommerce"></img>
          <p className="project-description"> Description</p>
      </div>
      <div className="project-grid">
        <img alt="Bear To Barely"></img>
        <p> Game Website: Bear to Barely </p>
        <p className="project-description"> 
            Description 
        </p>
      </div>
      <div className="project-grid">
        <img alt="To Do List"></img>
        <p> To Do List </p>
        <p className="project-description"> Description </p>
      </div>
    </div>
    </>
  )
}
