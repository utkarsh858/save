import React,{Component} from 'react';
import {Box} from '@material-ui/core';
import { MDBNavbar, 
MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from 'mdbreact';
import CaseStudies from './CaseStudies/CaseStudies.js';
import SocietalImpact from './SocietalImpact/SocietalImpact.js';
import Appreciation from './Appreciation/Appreciation.js';
import Testimonials from './Testimonials/Testimonials.js';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import './Home.css';

export default class Impact extends Component {
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

    <MDBNavbar light expand="md" className="menu">
    <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse4" isOpen={this.state.isOpen} navbar>
         <MDBNavbarNav left>
            

            <MDBNavItem className="menu-item" id="menu-item">
              <MDBNavLink to="#impact" onClick={()=>{this.scrollTo('impact')}}>Societal Impact</MDBNavLink>
            </MDBNavItem>
  <MDBNavItem className="menu-item" id="menu-item">
              <MDBNavLink to="#appreciation" onClick={()=>{this.scrollTo('appreciation')}}>Appreciation</MDBNavLink>
            </MDBNavItem>
  <MDBNavItem className="menu-item" id="menu-item">
              <MDBNavLink to="#testimonials" onClick={()=>{this.scrollTo('testimonials')}}>Testimonials</MDBNavLink>
            </MDBNavItem>
  <MDBNavItem className="menu-item" id="menu-item">
              <MDBNavLink to="#casestudies" onClick={()=>{this.scrollTo('casestudies')}}>Case Studies</MDBNavLink>
            </MDBNavItem>
            </MDBNavbarNav>
            

            <MDBNavbarNav right>

            <MDBNavItem>
              <MDBNavLink className="menu-item" to="/"><b>Home</b></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="menu-item" to="/activities"><b>Activities</b></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="menu-item" to="/team"><b>Team</b></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="menu-item" to="/impact"><b>Impact</b></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="menu-item" to="/contact"><b>Contact Us</b></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="menu-item right-0" to="/donate"><b>&nbsp;&nbsp;&nbsp;&nbsp;Donate&nbsp;&nbsp;&nbsp;&nbsp;</b></MDBNavLink>
            </MDBNavItem>
             </MDBNavbarNav>
     </MDBCollapse>
</MDBNavbar>
<SocietalImpact name="impact"/>
<Appreciation name="appreciation"/>
<Testimonials name="testimonials"/>
<CaseStudies name="casestudies"/>
</Box>
  );
}


}

