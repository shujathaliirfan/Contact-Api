import React from 'react'
import Navbar from 'react-bootstrap/Navbar';

import { Nav,NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import '../../App.css'


function Navigationbar() {
    return (
       
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#deets">Blogs</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        contact
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        
    )
}

export default Navigationbar
