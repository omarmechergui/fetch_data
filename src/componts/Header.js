import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header({ setSershe}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">omar shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Contact">contact</Nav.Link>
            <Nav.Link href="/About">about</Nav.Link>
            <Nav.Link href="/Cart">Cart</Nav.Link>
            <input onChange={(e) => setSershe(e.target.value)} type="text" placeholder="Search..." />
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    


  )
}

export default Header