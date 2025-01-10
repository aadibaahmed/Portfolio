// import { useState } from 'react'
import Home from './pages/Home'
// import Projects from './pages/Projects'
import Nav from './pages/Nav'
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="Home">
        <Home />
      </div>
    </div>
   
  )
}

export default App
