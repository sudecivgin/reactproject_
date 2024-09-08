import React from 'react'
import './İletişim.css'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";




const İletişim = () => {
  return (
    <div className='contact'>
<div className="contact-col">

  <h1>REZERVASYON VE İLETİŞİM </h1>

  
<ul>
    <li>seasidesavories@gmail.com</li>
    <li>+90 000 000 00 00</li>
    <li>Serin Bahçe Caddesi 21.Sokak No:89, İstanbul</li>

</ul>


<div className='social-media'>
          <a href='' target='_blank' rel='noopener noreferrer'>
            <FaInstagram className='social-icon' />
          </a>
          <a href='' target='_blank' rel='noopener noreferrer'>
            <FaWhatsapp className='social-icon' />
          </a>
          <a href='' target='_blank' rel='noopener noreferrer'>
            <FaFacebook className='social-icon' />
          </a>
</div>

   </div>
   </div>

  )
}

export default İletişim
