import React,{Component} from 'react';
import GridGallery from 'react-grid-gallery';
import {Box
} from '@material-ui/core';
import "./Article.css"
import {ArrowBack} from '@material-ui/icons'
import { MDBNavbar,MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from 'mdbreact';

export default class Article extends Component{
		  constructor(props){
    super(props)
    this.state = {
      isOpen:false
    }
  }
	render(){
    var title = window.localStorage.getItem('title');
    var sub_title = window.localStorage.getItem('sub_title');
    var cover_image = window.localStorage.getItem('cover_image');
    var content = window.localStorage.getItem('content');
var new_content = content.split ("/n").map ((item, i) => {return(<p key={i}>{item}</p>)})

    var date = JSON.parse(window.localStorage.getItem('date'));
    var images = JSON.parse(window.localStorage.getItem('images'));

		return(
			<React.Fragment>
			<Box class="document">
    <MDBNavbar light expand="md" className="menu">
    <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse4" isOpen={this.state.isOpen} navbar>

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

			<Box class="dialog-title">
			<Box class="dialog-back-button" onClick={()=>{window.history.back();}}><ArrowBack id="dialog-arrow"/></Box>
			{title}

			</Box>
			<Box class="dialog-content">
			<Box class="dialog-subtitle">
			{sub_title}
			</Box>
			<Box class="dialog-content-text">
            <img src={cover_image}alt="" class="dialog-image"/>
            {new_content}
			</Box>
			<GridGallery images={images}/>

			</Box>

			</Box>
			</React.Fragment>
		)
	}
}