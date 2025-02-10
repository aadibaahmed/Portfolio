// import { useState } from 'react'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Nav from './pages/Nav'
import Interests from './pages/Interests'
import Socials from './pages/Socials'
import Resume from './pages/Resume'

import './App.css'

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="Home">
        <Home />
      </div>
      <div className='Projects'>
        <Projects />
      </div>
      <div className='Interests'>
        <Interests />
      </div>
      <div className='Socials'>
        <Socials />
      </div>
    </div>
   
  )
}

export default App
