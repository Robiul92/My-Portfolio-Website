import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Projects</Nav.Link>
      <Nav.Link href="#pricing">About </Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Skills</Nav.Link>
      <Nav.Link href="#deets">Contract</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
      Resume
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;