import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'

export default function App() {
  return (
    <Router>
        <Navbar />
          <Switch>
              <Route exact path="/">
                  <About />
              </Route>
              <Route path="/projects">
                  <Projects />
              </Route>
              <Route path="/contact">
                  <Contact />
              </Route>
              <Route path="/resume">
                  <Resume />
              </Route>
          </Switch>
    </Router>
  )
}
