import React from 'react'

export default function Projects() {
  return (
    <>
    <header className="centerText w3-animate-left bold"> My Projects </header>
    <div className="project-container containerPad">
      <div className="project-grid rightMargin">
          <img className="project-images" src="../img/project1.png" alt="JQ's Tea & Coffee Ecommerce"></img>
          <p className="project-description"> Description</p>
          <p> </p>
      </div>
      <div className="project-grid rightMargin">
        <img className="project-images" src="../img/project2.jpg" alt="Habit Hamster Keep Track of Your Goals"></img>
        <p className="project-description"> 
            Description 
        </p>
      </div>
      <div className="project-grid rightMargin">
        <img alt="To Do List"></img>
        <p> To Do List </p>
        <p className="project-description"> Description </p>
      </div>
    </div>
    </>
  )
}
