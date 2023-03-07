import React from 'react'

export default function Projects() {
  return (
    <>
    <header className="centerText w3-animate-left bold"> My Projects </header>
    <div className="project-container containerPad">
      <div className="project-grid rightMargin">
          <p className="bold">Project Name: JQ's Coffee & Tea
            <img className="project-images" src="../img/project1.png" alt="JQ's Tea & Coffee Ecommerce"></img>
          </p>
          <p className="project-description"> 
            <p className="bold"> Ecommerce website </p>
            <span> This project is an Ecommerce website built primarily with React & MaterialUI. 
              I used components, props, and mapping to connect the data. Each page has routing to link to a component. 
              React state is being used to change the cover image, update the cart items, and store contact information. 
            </span>
          </p>
      </div>
      <div className="project-grid rightMargin">
        <p className="bold">Project Name: Habit Hamster
          <img className="project-images" src="../img/project2.jpg" alt="Habit Hamster Keep Track of Your Goals"></img>
        </p>
        <p className="project-description"> 
            <p className="bold">Team Project</p>
            <span> This is a collaborative project designed to help users build better habits. 
              I am working on the front end. 
              My partner is responsible for handling the back end. 
              We strive to make this project compatible with multiple platforms: websites, mobile, and smartwatches.
              </span>
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
