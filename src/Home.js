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
import Testimonials from './Testimonials/Testimonials.js';
import './Home.css';

function Home() {
  return (
    <Box className="document">
    <img className="logo" src={logo} />
    <Box  class="logo-text">SAVE <br/>
    <Box class="logo-text-caption">Society For Applied Value Education</Box>
    </Box>
  <Navbar sticky="top" expand="lg" className="menu">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="in">

      <Nav.Link className="navlink" href="#news">News</Nav.Link>
      <Nav.Link className="navlink" href="#work">Our Work</Nav.Link>
      <Nav.Link className="navlink" href="#casestudies">Case Studies</Nav.Link>
      <Nav.Link className="navlink" href="#appreciation">Appreciations</Nav.Link>
      <Nav.Link className="navlink" href="#Testimonials">Testimonials</Nav.Link>
      <Nav.Link className="navlink" href="#">Our Partners</Nav.Link>
      <Nav.Link className="navlink" href="#">About Us</Nav.Link>
      <Nav.Link className="navlink" href="#team">Our Team</Nav.Link>
      <Nav.Link className="navlink" href="#">Methodology</Nav.Link>
      <Nav.Link className="navlink" href="#contact">Contact Us</Nav.Link>
      <Nav.Link className="navlink right-1" href="/gallery">Gallery</Nav.Link>
      <Nav.Link className="navlink right-0" href="/donate">Donate</Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
<Work />
<News />
<CaseStudies/>
<Team />
<Testimonials />
<Appreciation />
<Contact />
</Box>
  );
}

export default Home;
