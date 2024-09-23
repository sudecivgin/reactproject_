import React from 'react';
import './İletişim.css';
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { Container, Row, Col } from 'react-bootstrap'; 

const İletişim = () => {
  return (
    <Container fluid className='contact'>
      <Row className='justify-content-center'>
        <Col xs={12} md={6} className='contact-col'>
          <h1>REZERVASYON VE İLETİŞİM</h1>
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
        </Col>
      </Row>
    </Container>
  );
};

export default İletişim;

