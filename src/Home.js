import React,{Component} from 'react';
import logo from './logo.png';
import {Box} from '@material-ui/core';
// import React from 'react';
import { MDBNavbar, MDBNavbarBrand,
MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from 'mdbreact';
import Work from './Work/Work.js';
import News from './News/News.js';
import CaseStudies from './CaseStudies/CaseStudies.js';
import Team from './Team/Team.js';
import Contact from './Contact/Contact.js';
import Appreciation from './Appreciation/Appreciation.js';
import Testimonials from './Testimonials/Testimonials.js';
import './Home.css';

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen:false
    }
  }

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

  render(){
  return (
    <Box className="document">
    <img className="logo" src={logo} />
    <Box  class="logo-text">SAVE <br/>
    <Box class="logo-text-caption">Society For Applied Value Education</Box>
    </Box>
    <MDBNavbar light expand="md" className="menu">
    <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
         <MDBNavbarNav left>
            
            <MDBNavItem tag="div" className="menu-item" id="menu-item">
              <MDBNavLink to="#work">Our Work</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="menu-item" id="menu-item">
              <MDBNavLink to="#news">News</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="menu-item" id="menu-item">
              <MDBNavLink to="#casestudies">Case Studies</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="menu-item" id="menu-item">
              <MDBNavLink to="#testimonials">Testimonials</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="menu-item" id="menu-item">
              <MDBNavLink to="#appreciation">Appreciation</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="menu-item" id="menu-item">
              <MDBNavLink to="#!">Our Partners</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="menu-item" id="menu-item">
              <MDBNavLink to="#about">About Us</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="menu-item" id="menu-item">
              <MDBNavLink to="#team">Our Team</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="menu-item" id="menu-item">
              <MDBNavLink to="#contact">Contact Us</MDBNavLink>
            </MDBNavItem>

            </MDBNavbarNav>
           <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="menu-item right-1" to="/gallery">Gallery</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="menu-item right-0" to="/donate"><b>&nbsp;&nbsp;&nbsp;&nbsp;Donate&nbsp;&nbsp;&nbsp;&nbsp;</b></MDBNavLink>
            </MDBNavItem>
             </MDBNavbarNav>
     </MDBCollapse>
</MDBNavbar>
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
// <Work />
// <News />
// <CaseStudies/>
// <Team />
// <Testimonials />
// <Appreciation />
// <Contact />

}

