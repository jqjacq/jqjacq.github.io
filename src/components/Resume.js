import React from 'react'

export default function Resume() {
  return (
    <>
    <header className="centerText w3-animate-left bold"> Resume </header>
    <div className="containerPad">
      <h3 className="centerText">
        <a className="resume"
                href="../Res23.pdf" 
                target="popup">
                Click here </a>
              to view my resume or
      </h3>
    </div>
      <a className="resume"
        href="../Res23.pdf" 
        target="popup">
          <img className="resphoto" src={`${process.env.PUBLIC_URL}/res.png`} alt="resume"></img>
      </a>
            <h3 className="centerText">
              Click on image above </h3>
    </>
  )
}
