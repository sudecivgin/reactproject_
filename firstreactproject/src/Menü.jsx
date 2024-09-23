import React from 'react';
import './Menü.css';
import { Container, Row, Col } from 'react-bootstrap'; 

import imagess from '../../assets/menu.png';
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
    'Narenciye Suları': narenciyeImg
  };

  return (
    <Container fluid className='menu'>
      
      <Row className='menu-headers'>
        <Col>
          <h1>MENÜ</h1>
          <div className='imagess'>
            <img src={imagess} alt='Menu' className='imagess' />
          </div>
        </Col>
      </Row>

  
      <Row className='menu-section'>
      

        <Col md={4}>
          <p className='subtitle'>ARA SICAKLAR</p>
          <ul className="menu-list">
            {Object.keys(menuItems).slice(0, 6).map(item => (
              <li key={item} className='menu-item'>
                <img src={menuItems[item]} alt={item} className='menu-item-img' />
                {item}
              </li>
            ))}
          </ul>
        </Col>

      
        <Col md={4}>
          <p className='text-1'>ANA YEMEKLER</p>
          <ul className="menu-list">
            {Object.keys(menuItems).slice(6, 13).map(item => (
              <li key={item} className='menu-item'>
                <img src={menuItems[item]} alt={item} className='menu-item-img' />
                {item}
              </li>
            ))}
          </ul>
        </Col>


        <Col md={4}>
          <p className='beverages-title'>İÇECEKLER</p>
          <ul className="menu-list">
            {Object.keys(menuItems).slice(13).map(item => (
              <li key={item} className='menu-item'>
                <img src={menuItems[item]} alt={item} className='menu-item-img' />
                {item}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
      
      <Row className='footer-container'>
        <Col className='footer-image'>
          <img src={saatImg} alt='Footer' className='footer-img img-fluid' />
        </Col>
      </Row>
    </Container>
  );
};

export default Menü;
