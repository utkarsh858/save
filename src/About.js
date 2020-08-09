import React,{Component} from 'react';
import {Box} from '@material-ui/core';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import logo from './logo.png';
import einstein from './einstein.jpg';

import { MDBNavbar,MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from 'mdbreact';
import AboutUs from './AboutUs/AboutUs.js';
import WhatWeDo from './WhatWeDo/WhatWeDo.js';
import WhySaveValues from './WhySaveValues/WhySaveValues.js';
import Vision from './Vision/Vision.js';
import Objectives from './Objectives/Objectives.js';
import StatutoryCompliances from './StatutoryCompliances/StatutoryCompliances.js';
import "./About.css"
export default class About extends Component {
	  constructor(props){
    super(props)
    this.state = {
      isOpen:false
    }
  }
  componentDidMount(){
    document.title="SAVE - About";
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
	return(
		<Box class="document">
        <img className="logo" alt="logo" src={logo} />
    <Box  class="logo-text">SAVE <br/>
    <Box class="logo-text-caption">Society For Applied Value Education</Box>
    </Box>
    <MDBNavbar light expand="md" className="menu">
    <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse4" isOpen={this.state.isOpen} navbar>
         <MDBNavbarNav left>
            

            <MDBNavItem className="menu-item" id="menu-item">
              <MDBNavLink to="#aboutus" onClick={()=>{this.scrollTo('aboutus')}}>Who are we</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem className="menu-item" id="menu-item">
              <MDBNavLink to="#whatwedo" onClick={()=>{this.scrollTo('whatwedo')}}>What We Do</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="menu-item" id="menu-item">
              <MDBNavLink to="#whysavevalues" onClick={()=>{this.scrollTo('whysavevalues')}}>Why Save Values</MDBNavLink>
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
<center>
<img src={einstein} alt="quote" className="einstein"/>
</center>
<AboutUs name="aboutus"/>
<WhatWeDo name="whatwedo"/>
<WhySaveValues name="whysavevalues"/>
<Vision name="vision" />
<Objectives name="objectives" />
<StatutoryCompliances name="compliances" />

		</Box>
	)
}
}