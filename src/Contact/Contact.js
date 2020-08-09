import React,{Component} from 'react';
import {Box,Grid,Typography,Button,TextField} from '@material-ui/core';
import filler from './filler.png';

import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from 'mdbreact';

import FacebookIcon from '@material-ui/icons/Facebook'
import HomeIcon from '@material-ui/icons/Home'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import CallIcon from '@material-ui/icons/Call'
import api from '../api'

import './Contact.css';

class Form extends Component{
	render(){
		return(
				<form class="form">
				<TextField id="name" label="Name" variant="outlined" fullWidth

				onChange = {(event) => {
				this.setState({name: event.target.value});
				}}

				/>
				<br/><br/>
				<TextField id="email" label="E-mail" variant="outlined" fullWidth
				
				onChange = {(event) => {
				this.setState({email: event.target.value});
				}}

				/>
				<br/><br/>
				<TextField id="query" label="Query" variant="outlined" fullWidth multiline

				onChange = {(event) => {
				this.setState({query: event.target.value});
				}}

				/>
            <Button onClick={this.props.submitHandler} class="cont-button">
              Submit
            </Button><br/>
            </form>
		)
	}
}

export default class Contact extends Component{
	constructor(props){
		super(props)
		this.state = {
			name:"",
			email:"",
			query:"",
			confirmMsg:"",
			show :true,
		}
	}
	submit = async()=>{
	await api.submitQueryForm(this.state).then(data => {
		this.setState({
		confirmMsg:"Thank You. We will reply as soon as possible",
		show : false,
	})
	});
	
	}

	render(){
		var form = (this.state.show)? <Form submitHandler={this.submit} /> :'';
			
		return(
			<Box id="contact" class="document">
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
			<Typography gutterBottom variant="h5" display="block" class="section">
			CONTACT US
			</Typography>
			<Grid container spacing={1}>
			<Grid item xs={12} sm={6}>
			<Typography gutterBottom variant="body1" class="impression">
				Feel free to reach us for any more queries
			</Typography>
			{form}
            {this.state.confirmMsg}
				
            
			</Grid>
			<Grid item xs={12} sm={6} class="cont-right">
			<img className="image" alt="" src ={filler}/>
			<Typography class="details">
			<div class="contact">
			<CallIcon/> +91-9620466011; +91-8375957575
			</div>
			<div class="contact">
			<AlternateEmailIcon/> care.save.values@gmail.com
			</div>
			<div class="contact"> 
			<HomeIcon/> Head Office: SAVE (Society for Applied Value Education), 32/8 Punjabi Bagh Ext., Delhi – 110026
			</div>
			</Typography>

			</Grid>
			</Grid>
			<br/>
			<Box class="center">
			<Typography variant="body2" gutterBottom id="seeuson">See us on</Typography>
			<br/>
			<div class="social" onClick={()=>{window.location.href="https://www.facebook.com/Society-For-Applied-Value-Education-105862504544645/"}}><FacebookIcon fontSize="large" id="icon"/></div>
			</Box>
			</Box>
		);
	}
}