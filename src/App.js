import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Language from './components/Language'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

export default function App() {
  return (
    <Router>
        <Navbar />
          <Switch>
              <Route exact path="/">
                  <About />
                  <Language />
              </Route>
              <Route path="/projects">
                  <Projects />
              </Route>
              <Route path="/contact">
                  <Contact />
              </Route>
          </Switch>
        <Footer />
    </Router>
  )
}
