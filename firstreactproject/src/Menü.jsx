import React, { useState } from 'react';
import './Menü.css';

// Görselleri buraya ekleyin
import ahtapotIzgaraImg from '../../assets/ahtapot2.png';
import ızgaraBalıkImg from '../../assets/ızgara balık2.png';
import somonTavaImg from '../../assets/somon tava2.png';
import kalamarTavaImg from '../../assets/kalamar tava2.png';
import midyeTavaImg from '../../assets/midye tava2.png';
import karidesGüveçImg from '../../assets/karides güveç2.png';
import kalkanFiletoImg from '../../assets/kalkan fileto2.png';

import kalamarDolmaImg from '../../assets/kalamar_dolma.png';
import giritYahnisiImg from '../../assets/Girit Yahnisi.png';
import jumboKaridesImg from '../../assets/jumbo_karides.png';
import patatesKoftesiImg from '../../assets/patates_koftesi.png';
import tereyagindaKaridesImg from '../../assets/tereyaginda_karides.png';
import denizMahsulleriGuvecImg from '../../assets/deniz_mahsulleri_guvec.png';


import suImg from '../../assets/su.png';
import salgamImg from '../../assets/şalgam.png';
import beyazsarapImg from '../../assets/beyaz şarap.png';
import kirmizisarapImg from '../../assets/kırmızı şarap.png';
import mojitoImg from '../../assets/mojito.png';





const Menü = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const closeImage = () => {
    setSelectedItem(null);
  };

  const getImageSrc = () => {
    switch (selectedItem) {
      case 'Ahtapot Izgara':
        return ahtapotIzgaraImg;
      case 'Somon Tava':
        return somonTavaImg;
      case 'Izgara Balık':
        return ızgaraBalıkImg;
      case 'Kalamar Tava':
        return kalamarTavaImg;
      case 'Midye Tava':
        return midyeTavaImg;
      case 'Karides Güveç':
        return karidesGüveçImg;
      case 'Kalkan Fileto':
        return kalkanFiletoImg;
      case 'Kalamar Dolma':
        return kalamarDolmaImg;
      case 'Girit Yahnisi':
        return giritYahnisiImg;
      case 'Jumbo Karides':
        return jumboKaridesImg;
      case 'Patates Köftesi':
        return patatesKoftesiImg;
      case 'Tereyağında Karides':
        return tereyagindaKaridesImg;
      case 'Deniz Mahsülleri Güveç':
        return denizMahsulleriGuvecImg;


        case 'Su':
          return suImg;
          
      case 'Şalgam':
        return salgamImg;
        
      case 'Beyaz Şarap':
        return beyazsarapImg;
        
      case 'Kırmızı Şarap':
        return kirmizisarapImg;
        
      case 'Mojito':
        return mojitoImg;


      default:
        return null;
    }
  };

  return (
    <div className='menu'>
            <div className='menu-headers'>
            <div className='menu-sections-container'> 
               <div className='menu-section'>

      <div className='menu-text'>


  <h1>MENÜ</h1>


  <p className='subtitle'>ARA SICAKLAR</p>
  <div className='arasicak-buttons'>
    <li onClick={() => handleClick('Kalamar Dolma')}>Kalamar Dolma</li>
    <li onClick={() => handleClick('Girit Yahnisi')}>Girit Yahnisi</li>
    <li onClick={() => handleClick('Jumbo Karides')}>Jumbo Karides</li>
    <li onClick={() => handleClick('Patates Köftesi')}>Patates Köftesi</li>
    <li onClick={() => handleClick('Tereyağında Karides')}>Tereyağında Karides</li>
    <li onClick={() => handleClick('Deniz Mahsülleri Güveç')}>Deniz Mahsülleri Güveç</li>
  </div>


  {selectedItem && (
    <div className='image-overlay' onClick={closeImage}>
      <div className='image-container'>
        <img src={getImageSrc()} alt={selectedItem} />
      </div>
    </div>
    

  )}
</div>
</div>
</div>



<div className='text'>
        <p className='text-1'>ANA YEMEKLER</p>
        <ul className='menu-items'>
          <li onClick={() => handleClick('Ahtapot Izgara')}>Ahtapot Izgara</li>
          <li onClick={() => handleClick('Karides Güveç')}>Karides Güveç</li>
          <li onClick={() => handleClick('Kalamar Tava')}>Kalamar Tava </li>
          <li onClick={() => handleClick('Kalkan Fileto')}>Kalkan Fileto</li>
          <li onClick={() => handleClick('Somon Tava')}>Somon Tava</li>
          <li onClick={() => handleClick('Izgara Balık')}>Izgara Balık</li>
          <li onClick={() => handleClick('Midye Tava')}>Midye Tava</li>
        </ul>

      </div>
      <div>
            <p className='beverages-title'>İÇECEKLER</p>
            <ul className='beverages-buttons'>

              <li onClick={() => handleClick('Su')}>Su</li>
              <li onClick={() => handleClick('Şalgam')}>Şalgam</li>
              <li onClick={() => handleClick('Beyaz Şarap')}>Beyaz Şarap</li>
              <li onClick={() => handleClick('Kırmızı Şarap')}>Kırmızı Şarap</li>

              <li onClick={() => handleClick('Mojito')}>Mojito</li>


            </ul>
          </div>


    </div>
    </div>



  );
}

export default Menü;