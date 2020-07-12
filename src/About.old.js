import React,{Component} from 'react';
import logo from './logo.png';
import {Box} from '@material-ui/core';
// import React from 'react';
import { MDBNavbar, MDBNavbarBrand,
MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from 'mdbreact';
import AboutUs from './AboutUs/AboutUs.js';
import Team from './Team/Team.js';
import Mentors from './Mentors/Mentors.js';
import Vision from './Vision/Vision.js';
import Partners from './Partners/Partners.js';
import Objectives from './Objectives/Objectives.js';
import StatutoryCompliances from './StatutoryCompliances/StatutoryCompliances.js';
import Contact from './Contact/Contact.js';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import './About.css';

export default class About extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen:false
    }
  }

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

scrollTo = (target) =>{
      scroller.scrollTo(target, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
}

  render(){
  return (
    <Box className="document">

    <MDBNavbar light expand="md" className="menu">
    <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
         <MDBNavbarNav left>
            

            <MDBNavItem className="menu-item" id="menu-item">
              <MDBNavLink to="#about" onClick={()=>{this.scrollTo('about')}}>About Us</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="menu-item" id="menu-item">
              <MDBNavLink to="#vision" onClick={()=>{this.scrollTo('vision')}}>Vision</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="menu-item" id="menu-item">
              <MDBNavLink to="#objectives" onClick={()=>{this.scrollTo('objectives')}}>Objectives</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="menu-item" id="menu-item">
              <MDBNavLink to="#compliances" onClick={()=>{this.scrollTo('compliances')}}>Compliances</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem className="menu-item" id="menu-item">
              <MDBNavLink to="#team" onClick={()=>{this.scrollTo('team')}}>Our Team</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="menu-item" id="menu-item">
              <MDBNavLink to="#mentors" onClick={()=>{this.scrollTo('mentors')}}>Our Team</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem className="menu-item" id="menu-item">
              <MDBNavLink to="#partners" onClick={()=>{this.scrollTo('partners')}}>Our Partners</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem className="menu-item" id="menu-item">
              <MDBNavLink to="#contact" onClick={()=>{this.scrollTo('contact')}}>Contact Us</MDBNavLink>
            </MDBNavItem>

            </MDBNavbarNav>
           <MDBNavbarNav right>

            <MDBNavItem>
              <MDBNavLink className="menu-item right-0" to="/donate"><b>&nbsp;&nbsp;&nbsp;&nbsp;Donate&nbsp;&nbsp;&nbsp;&nbsp;</b></MDBNavLink>
            </MDBNavItem>
             </MDBNavbarNav>
     </MDBCollapse>
</MDBNavbar>
<About name="about"/>
<Vision name="vision" />
<Objectives name="objectives" />
<StatutoryCompliances name="compliances" />
<Team name="team"/>
<Mentors name="mentors"/>
<Partners name="partners" />
<Contact name="contact"/>
</Box>
  );
}


}

