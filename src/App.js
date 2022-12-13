import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Language from './components/Language'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
        <Navbar />
        <About />
        <Projects />
        <Language />
        <Contact />
        <Footer />
    </>
  )
}
