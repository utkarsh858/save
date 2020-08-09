import React,{Component} from 'react';
import {Box} from '@material-ui/core';
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from 'mdbreact';
import Work from './Work/Work.js';
import News from './News/News.js';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import './Home.css';

export default class Activities extends Component {
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
              <MDBNavLink to="#work" onClick={()=>{this.scrollTo('work')}}>Methodology</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="menu-item" id="menu-item">
              <MDBNavLink to="#news" onClick={()=>{this.scrollTo('news')}}>Work</MDBNavLink>
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

<Work name="work"/>
<News name="news"/>
</Box>
  );
}


}

