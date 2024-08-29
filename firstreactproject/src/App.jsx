import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import Programs from './components/Programs/Programs'
import Slider from './components/Programs/Slider'
import Contact from './components/Programs/Contact'

const App = () => {
  return (
      <div className='container'>
      <Navbar/>
      <Home/>
     <Programs/>
     <Slider/>
     <Contact/>
      </div>
  )
}

export default App
