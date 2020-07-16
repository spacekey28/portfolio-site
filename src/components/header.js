import React from "react"

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SocialBanner from './social-banner';
import imageLogo from '../images/peteson-logo.png';


export default function Header(props) {
  return (
    <nav className="header clearfix sticky-top">
      <Container className="header__container">
        <Navbar expand="lg">
          <Navbar.Brand href="/">
            <img className="brand-logo"
                  src={imageLogo} 
                  alt="peteson.me logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="align-items-end">
              <Nav.Link href="/work">
                Work
              </Nav.Link>
              <Nav.Link href="/blog">
                Blog
              </Nav.Link>
              <Nav.Link href="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <SocialBanner />
      </Container>
    </nav>   
  )
}