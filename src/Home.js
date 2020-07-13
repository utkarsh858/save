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
import SocietalImpact from './SocietalImpact/SocietalImpact.js';
import WhoAreWe from './WhoAreWe/WhoAreWe.js';
import Appreciation from './Appreciation/Appreciation.js';
import Testimonials from './Testimonials/Testimonials.js';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import './Home.css';

export default class Home extends Component {
  componentDidMount(){
    document.title="SAVE";
  }

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
    <img className="logo" src={logo} />
    <Box  class="logo-text">SAVE <br/>
    <Box class="logo-text-caption">Society For Applied Value Education</Box>
    </Box>
    <MDBNavbar light expand="md" className="menu">
    <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
         <MDBNavbarNav left>
            
            <MDBNavItem tag="div" className="menu-item" id="menu-item">
              <MDBNavLink to="#whoarewe" onClick={()=>{this.scrollTo('whoarewe')}}>Our Story</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem tag="div" className="menu-item" id="menu-item">
              <MDBNavLink to="#impact" onClick={()=>{this.scrollTo('impact')}}>Societal Impact</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem tag="div" className="menu-item" id="menu-item">
              <MDBNavLink to="#work" onClick={()=>{this.scrollTo('work')}}>Our Work</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="menu-item" id="menu-item">
              <MDBNavLink to="#testimonials" onClick={()=>{this.scrollTo('testimonials')}}>Testimonials</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="menu-item" id="menu-item">
              <MDBNavLink to="#casestudies" onClick={()=>{this.scrollTo('casestudies')}}>Case Studies</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="menu-item" id="menu-item">
              <MDBNavLink to="#appreciation" onClick={()=>{this.scrollTo('appreciation')}}>Appreciation</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="menu-item" id="menu-item">
              <MDBNavLink to="#news" onClick={()=>{this.scrollTo('news')}}>News</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem className="menu-item" id="menu-item">
              <MDBNavLink to="#contact" onClick={()=>{this.scrollTo('contact')}}>Contact Us</MDBNavLink>
            </MDBNavItem>

            </MDBNavbarNav>
           <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="menu-item" to="/about">About Us</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="menu-item right-1" to="/gallery">Gallery</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="menu-item right-0" to="/donate"><b>&nbsp;&nbsp;&nbsp;&nbsp;Donate&nbsp;&nbsp;&nbsp;&nbsp;</b></MDBNavLink>
            </MDBNavItem>
             </MDBNavbarNav>
     </MDBCollapse>
</MDBNavbar>
<WhoAreWe name="whoarewe"/>
<SocietalImpact name="impact"/>
<Work name="work"/>
<Testimonials name="testimonials"/>
<CaseStudies name="casestudies"/>
<Appreciation name="appreciation"/>
<News name="news"/>
<Contact name="contact"/>
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

