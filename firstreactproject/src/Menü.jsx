import React from 'react';
import './Menü.css';



document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.menu-item-img');
  const overlay = document.createElement('div');
  overlay.className = 'image-overlay';
  const overlayImg = document.createElement('img');
  overlay.appendChild(overlayImg);
  document.body.appendChild(overlay);



  images.forEach(img => {
    img.addEventListener('click', (e) => {
      overlayImg.src = e.target.src; 
      overlay.classList.add('show'); 
    });
  });

  overlay.addEventListener('click', () => {
    overlay.classList.remove('show'); 
  });
});


import imagess from '../../assets/menu-son2.png';

import saatImg from '../../assets/saat4.png'; 



import kalamarDolmaImg from '../../assets/kalamar_dolma.png';
import giritYahnisiImg from '../../assets/Girit Yahnisi.png';
import jumboKaridesImg from '../../assets/jumbo_karides.png';
import patatesKoftesiImg from '../../assets/patates_koftesi.png';
import tereyagindaKaridesImg from '../../assets/tereyaginda_karides.png';
import denizMahsulleriGuvecImg from '../../assets/deniz_mahsulleri_guvec.png';

import ahtapotIzgaraImg from '../../assets/ahtapot2.png';
import karidesGuvecImg from '../../assets/karides güveç2.png';
import kalamarTavaImg from '../../assets/kalamar tava2.png';
import kalkanFiletoImg from '../../assets/kalkan fileto2.png';
import somonTavaImg from '../../assets/somon tava2.png';
import izgaraBalikImg from '../../assets/ızgara balık2.png';
import midyeTavaImg from '../../assets/midye tava2.png';

import suImg from '../../assets/su.png';
import salgamImg from '../../assets/şalgam.png';
import beyazSarapImg from '../../assets/beyaz şarap.png';
import kirmiziSarapImg from '../../assets/kırmızı şarap.png';
import mojitoImg from '../../assets/mojito.png';
import narenciyeImg from '../../assets/narenciye.png';

const Menü = () => {
  const menuItems = {
    'Kalamar Dolma': kalamarDolmaImg,
    'Girit Yahnisi': giritYahnisiImg,
    'Jumbo Karides': jumboKaridesImg,
    'Patates Köftesi': patatesKoftesiImg,
    'Tereyağında Karides': tereyagindaKaridesImg,
    'Deniz Mahsülleri Güveç': denizMahsulleriGuvecImg,
    'Ahtapot Izgara': ahtapotIzgaraImg,
    'Karides Güveç': karidesGuvecImg,
    'Kalamar Tava': kalamarTavaImg,
    'Kalkan Fileto': kalkanFiletoImg,
    'Somon Tava': somonTavaImg,
    'Izgara Balık': izgaraBalikImg,
    'Midye Tava': midyeTavaImg,
    'Su': suImg,
    'Şalgam': salgamImg,
    'Beyaz Şarap': beyazSarapImg,
    'Kırmızı Şarap': kirmiziSarapImg,
    'Mojito': mojitoImg,
    'Narenciye Suları':narenciyeImg
  };

  return (
    <div className='menu'>
      <div className='menu-headers'>
        <div className='menu-sections-container'>
          <div className='menu-section'>
            <div className='menu-text'>
              <h1>MENÜ</h1>
              <div className='imagess'>
                <img src={imagess} alt='menuu.png' className='imagess' />
              </div>



              <p className='subtitle'>ARA SICAKLAR</p>
<ul className='menu-list ara-sicak-list'>
  {Object.keys(menuItems).slice(0, 6).map(item => (
    <li key={item} className='ara-sicak-item'>
      <img src={menuItems[item]} alt={item} className='menu-item-img' />
      {item}
    </li>
  ))}
</ul>

            </div>
          </div>
        </div>

        <div className='text'>
          <p className='text-1'>ANA YEMEKLER</p>
          <ul className='menu-list'>
            {Object.keys(menuItems).slice(6, 13).map(item => (
              <li key={item}>
                <img src={menuItems[item]} alt={item} className='menu-item-img' />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
        <p className='beverages-title'>İÇECEKLER</p>
          <ul className='menu-list beverages-list'>
            {Object.keys(menuItems).slice(13).map(item => (
              <li key={item}>
                <img src={menuItems[item]} alt={item} className='menu-item-img' />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='footer-container'>
      <div className='footer-image'>
        <img src={saatImg} alt='footer' className='footer-img' />
       </div>
</div>

    </div>
  );
}


export default Menü;
