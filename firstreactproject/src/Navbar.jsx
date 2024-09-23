import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo15.png';
import { Link } from 'react-scroll';
import { IoMdSearch, IoMdMenu } from "react-icons/io"; 
import { Container, Row, Col, Offcanvas, Button } from 'react-bootstrap'; 

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid className='Navbar'>
      <Row className="align-items-center justify-content-between no-gutters">
     
     
        <Col xs={6} sm={4} md={3} lg={2} className='text-left'>
          <img src={logo} alt='Logo' className='logo9' />
        </Col>

 
        <Col xs={12} sm={8} md={6} lg={7} className='d-none d-md-flex justify-content-center'>
          <ul className='nav-menu d-flex justify-content-center'>
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
        </Col>

    
        <Col xs={6} sm={4} md={3} lg={2} className='d-flex justify-content-end align-items-start'> 
          <div className='d-none d-md-flex align-items-center search-box'> 
            <input type='text' placeholder='Ara' />
            <IoMdSearch />
          </div>
          <Button variant="outline-secondary" onClick={handleShow} className="menu-button d-md-none ms-2"> 
            <IoMdMenu size={30} />
          </Button>
        </Col>
      </Row>


      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="offcanvas-title">SEASIDE SAVORIES</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='d-flex align-items-center search-box'> 
            <input type='text' placeholder='Ara' />
            <IoMdSearch className="search-icon" />
          </div>
          <ul className='offcanvas-menu'>
            <li onClick={handleClose}>
              <Link to='home' smooth={true} offset={-70} duration={500}>
                Ana Sayfa
              </Link>
            </li>
            <li onClick={handleClose}>
              <Link to='hakkımızda' smooth={true} offset={-70} duration={500}>
                Hakkımızda
              </Link>
            </li>
            <li onClick={handleClose}>
              <Link to='menu' smooth={true} offset={-70} duration={500}>
                Menü
              </Link>
            </li>
            <li onClick={handleClose}>
              <Link to='iletişim' smooth={true} offset={-70} duration={500}>
                İletişim
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
}

export default Navbar;

        
