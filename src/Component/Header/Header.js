import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
    return (
//         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//   <Container>
//   <Nav.Link className='text-white fw-bold' as={Link} to="/">Home</Nav.Link>
//   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <Navbar.Collapse id="responsive-navbar-nav">
//     <Nav className="me-auto">
//     <Nav.Link className='text-white fw-bold' as={Link} to="Home">Home</Nav.Link>
//       <Nav.Link href="home#projects">Projects</Nav.Link>
//       <Nav.Link href="#pricing">About </Nav.Link>
      
//     </Nav>
    
//     <Nav>
//       <Nav.Link href="#deets">Skills</Nav.Link>
//       <Nav.Link href="#deets">Contract</Nav.Link>
//       <Nav.Link eventKey={2} href="#memes">
//       Resume
//       </Nav.Link>
//     </Nav>
//   </Navbar.Collapse>
//   </Container>
// </Navbar>
<>
  <Navbar collapseOnSelect expand="lg" bg="white" variant="light" sticky="top">
  <Container>
  <Navbar.Brand as={Link} to="/">
     <span className='btn btn-warning'> <strong>ROBIUL AWAL</strong></span>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="justify-content-end flex-grow-1">

    <Nav.Link as={Link} to="Home"><b>Home</b></Nav.Link>
    
      <Nav.Link  as={Link} to="home#projects" smooth><b>Projects</b></Nav.Link>
      <Nav.Link  as={Link} to="home#skills" smooth><b>Skills</b></Nav.Link>
      <Nav.Link  as={Link} to="home#contract" smooth><b>Contract</b> </Nav.Link>
      
      <Nav.Link as={Link} to="blog"><b>Blog</b></Nav.Link>
      
    </Nav>
    <Nav className='me-auto'>
      <Nav.Link as={Link} to="about"><b>About</b></Nav.Link>
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  
  </>
    );
};

export default Header;