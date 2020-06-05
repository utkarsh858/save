import React,{Component} from 'react';
import {Box,Grid,Typography,Button,TextField,Avatar} from '@material-ui/core';
import filler from './filler.jpg';
import './Contact.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export default class Contact extends Component{

	render(){
		return(
			<Box id="contact">
			<Typography>
			Contact Us
			</Typography>
			<Grid container spacing={9}>
			<Grid item xs={12} sm={6}>
				<form>
				<TextField id="name" label="Name" variant="filled"/>
				<br/>
				<TextField id="email" label="E-mail" variant="filled"/>
				<br/>
				<TextField id="query" label="Query" variant="filled"/>
				<Button />
				</form>
			</Grid>
			<Grid item xs={12} sm={6}>
			<img className="contact" src ={filler}/>
			<Typography>
			Phone, Email, etc. 
			</Typography>
			</Grid>
			</Grid>
			<Avatar><FacebookIcon /></Avatar>
			<Avatar><InstagramIcon /></Avatar>
			<Avatar><TwitterIcon /></Avatar>
			</Box>
		);
	}
}