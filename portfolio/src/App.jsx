// import { useState } from 'react'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Nav from './pages/Nav'
import Interests from './pages/Myint'
import Socials from './pages/Socials'

import './App.css'

function App() {

  const goTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
  const mybutton = document.getElementById("Backtotopbutton");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
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

      <button id = 'Backtotopbutton' className= 'btn-modal' onClick={goTop}>Go to Top</button>
    </div>

  )
}

export default App
