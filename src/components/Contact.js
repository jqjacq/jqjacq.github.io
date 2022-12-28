import React from 'react'

export default function Contact() {
  return (
    <>
    <div className="contact-container">  
      <form className="w3-animate-right">
          <header className="centerText bold"> Contact Me </header>
            <label for="first-name">Full Name:</label>
                <input type="text" 
                    id="full-name"
                    placeholder="John Smith"
                    required></input>
            <label for="email">Email:</label>
                <input type="email" 
                    placeholder="johnsmith@gmail.com"
                    required></input>  
            <label for="phonenumber">Phone Number:</label>
                <input type="tel" 
                    id="telephone" 
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                    placeholder="646-555-7890"
                    required></input> 
            <label for="message"> Message: </label>
            <textarea id="message" 
                      rows="5"
                      required>
            </textarea>
            <br></br>
            <button className="centerText submit" type="submit">Submit</button>
          </form>
        </div>
          <p className="centerText end">
            You can also contact me through GitHub and email!
          </p>
    </>
  )
}
