import React from 'react';
import logo from './logo.png';
import {Box} from '@material-ui/core';
import {Navbar,Nav} from 'react-bootstrap';
import Work from './Work/Work.js';
import News from './News/News.js';
import CaseStudies from './CaseStudies/CaseStudies.js';
import Team from './Team/Team.js';
import Contact from './Contact/Contact.js';
import Appreciation from './Appreciation/Appreciation.js';
import './Home.css';


function Home() {
  return (
    <Box className="document">
    <img className="logo" src={logo} />
    <Box component ="span">SAVE </Box>
  <Navbar bg="light" expand="lg" className="menu">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="in">
      <Nav.Link href="#news">News</Nav.Link>
      <Nav.Link href="#work">Our Work</Nav.Link>
      <Nav.Link href="#casestudies">Case Studies</Nav.Link>
      <Nav.Link href="#appreciation">Appreciations</Nav.Link>
      <Nav.Link href="#">Testimonials</Nav.Link>
      <Nav.Link href="#">Our Partners</Nav.Link>
      <Nav.Link href="#">About Us</Nav.Link>
      <Nav.Link href="#team">Our Team</Nav.Link>
      <Nav.Link href="#">Methodology</Nav.Link>
      <Nav.Link href="#contact">Contact Us</Nav.Link>
      <Nav.Link href="/gallery">Gallery</Nav.Link>
      <Nav.Link href="#">Blog</Nav.Link>
      <Nav.Link href="/donate">Donate</Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
<Work />
<News />
<CaseStudies/>
<Team />
<Appreciation />
<Contact />
</Box>
  );
}

export default Home;
