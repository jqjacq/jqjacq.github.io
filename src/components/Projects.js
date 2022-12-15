import React from 'react'

export default function Projects() {
  return (
    <>
    <header className="centerText w3-animate-left bold"> My Projects </header>
    <div className="project-container">
      <div class="project-grid">
          <img class="project-images" src="../img/project1.png" alt="JQ's Tea & Coffee Ecommerce"></img>
          <p class="project-description"> Description</p>
      </div>
      <div class="project-grid">
        <img alt="Bear To Barely"></img>
        <p> Game Website: Bear to Barely </p>
        <p class="project-description"> 
            Description 
        </p>
      </div>
      <div class="project-grid">
        <img alt="To Do List"></img>
        <p> To Do List </p>
        <p class="project-description"> Description </p>
      </div>
    </div>
    </>
  )
}
