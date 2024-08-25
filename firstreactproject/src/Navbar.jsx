import React from 'react';
import './Navbar.css'
import logo from '../assets/logo9.png';



const Navbar =()=> {
  return (
    <div className='Navbar'>
        <img src ={logo} alt=''className='logo9' />
      
        
        <ul>
                <li>Ana Sayfa </li>
<li>Hakkımızda</li>
<li>Menü</li>
<li>İletişim</li>

        </ul>
        <div className='search-box'>
            <input type='text' placeholder='Search'/>
            
        </div>
        

        </div>
  )
}

export default Navbar