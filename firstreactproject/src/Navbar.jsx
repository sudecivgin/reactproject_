import React from 'react';
import './Navbar.css'
import logo from '../assets/logo9.png';
import { NavLink } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";




const Navbar =()=> {
  const [click,setClick]=useState(false)
  
  return (
    <div className='Navbar'>
        <img src ={logo} alt=''className='logo9' />

      <ul className ='nav-menu'>          
        <li>
                  <NavLink className ="nav-link" to="/Ana Sayfa">Ana Sayfa</NavLink>

</li>
<li>
<NavLink className ="nav-link" to="/Hakkımızda">Hakkımızda</NavLink>
 
</li>
<li>
<NavLink className ="nav-link" to="/Menü">Menü</NavLink>
 
</li>
<li>

<NavLink className ="nav-link" to="/İletişim">İletişim</NavLink>
</li>

        </ul>
        <div className='search-box'>
            <input type='text' placeholder='Search'/>
            <IoMdSearch />

            
        </div>
        

        </div>
  )
}

export default Navbar
      
      
        
