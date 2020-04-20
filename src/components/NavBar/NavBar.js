// == Import : npm
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

// == Import : local
import './navBar.scss';

// == Composant
const NavBar = () => (
  <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Navbar.Brand href="#home">Star War React</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#Planets">Planets</Nav.Link>
          <Nav.Link href="#Spaceships">Spaceships</Nav.Link>
          <Nav.Link href="#Vehicles">Vehicles</Nav.Link>
          <Nav.Link href="#People">People</Nav.Link>
          <Nav.Link href="#Films">Films</Nav.Link>
          <Nav.Link href="#Species">Species</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="warning">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  </>
);

// == Export
export default NavBar;
