import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Hakkımızda from './components/Programs/Hakkımızda';
import Slider from './components/Programs/Slider';
import Menü from './components/Programs/Menü';
import İletişim from './components/Programs/İletişim';
import { Element } from 'react-scroll';
import './App.css'; 

const App = () => {
  return (
    <div className='container'>
      <Navbar />

      <Element name='home'>
        <Home />
      </Element>

      <Element name='hakkımızda'>
        <Hakkımızda />
      </Element>

      <Element name='slider'>
        <Slider />
      </Element>

      <Element name='menu'>
        <Menü />
      </Element>


      <Element name='iletişim'>
        <İletişim/>
      </Element>


    </div>
  );
}

export default App;
