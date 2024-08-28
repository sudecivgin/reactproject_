import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home/Home'


const App = () => {
  return (
      <div className='container'>
      <Navbar/>
      <Home/>
        <Programs/>
      </div>
  )
}

export default App
