// import { useState } from 'react'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Nav from './pages/Nav'
import Interests from './pages/Interests'
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
    </div>
   
  )
}

export default App
