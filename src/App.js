import React from 'react';
import logo from './logo.png';
import './App.css';
import {Box} from '@material-ui/core';
import {Navbar,Nav} from 'react-bootstrap';
import Work from './Work/Work.js';
import News from './News/News.js';
import Team from './Team/Team.js';

function App() {
  return (
    <Box>
    <img className="logo" src={logo} />
    <Box component ="span">SAVE </Box>
    <Navbar bg="light" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#news">News</Nav.Link>
      <Nav.Link href="#work">Our Work</Nav.Link>
      <Nav.Link href="#">Case Studies</Nav.Link>
      <Nav.Link href="#">Appreciations</Nav.Link>
      <Nav.Link href="#">Testimonials</Nav.Link>
      <Nav.Link href="#">Our Partners</Nav.Link>
      <Nav.Link href="#">About Us</Nav.Link>
      <Nav.Link href="#team">Our Team</Nav.Link>
      <Nav.Link href="#">Methodology</Nav.Link>
      <Nav.Link href="#">Contact Us</Nav.Link>
      <Nav.Link href="#">Gallery</Nav.Link>
      <Nav.Link href="#">Blog</Nav.Link>
      <Nav.Link href="#">Donate</Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
<Work />
<News />
<Team />
</Box>
  );
}

export default App;
