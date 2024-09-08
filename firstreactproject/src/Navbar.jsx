import React from 'react';
import './Navbar.css';
import logo from '../assets/logo15.png';
import { Link } from 'react-scroll';
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='Navbar'>
      <img src={logo} alt='Logo' className='logo9' />

      <ul className='nav-menu'>
        <li>
          <Link to='home' smooth={true} offset={-70} duration={500}>
            Ana Sayfa
          </Link>
        </li>
        <li>
          <Link to='hakkımızda' smooth={true} offset={-70} duration={500}>
            Hakkımızda
          </Link>
        </li>
        <li>
          <Link to='menu' smooth={true} offset={-70} duration={500}>
            Menü
          </Link>
        </li>
        <li>
          <Link to='iletişim' smooth={true} offset={-70} duration={500}>
            İletişim
          </Link>
        </li>
      </ul>

      <div className='search-box'>
        <input type='text' placeholder='Ara' />
        <IoMdSearch />
      </div>
    </div>
  );
}

export default Navbar;
        
