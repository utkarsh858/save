import React,{Component} from 'react';
import {Box,Grid,Typography,Button,TextField,Avatar,
Link
} from '@material-ui/core';
import filler from './filler.png';


import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import HomeIcon from '@material-ui/icons/Home'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import CallIcon from '@material-ui/icons/Call'
import './Contact.css';

export default class Contact extends Component{

	render(){
		return(
			<Box id="contact">
			<Typography gutterBottom variant="h5" display="block" class="section">
			CONTACT US
			</Typography>
			<Grid container spacing={1}>
			<Grid item xs={12} sm={6}>
			<Typography gutterBottom variant="body1" class="impression">
			We'd love to hear from You.
			</Typography>
				<form class="form">
				<TextField id="name" label="Name" variant="outlined" fullWidth/>
				<br/><br/>
				<TextField id="email" label="E-mail" variant="outlined" fullWidth/>
				<br/><br/>
				<TextField id="query" label="Query" variant="outlined" fullWidth multiline/>
				<Button />
				</form>
			</Grid>
			<Grid item xs={12} sm={6} class="right">
			<img className="image" src ={filler}/>
			<Typography class="details">
			<div class="contact">
			<CallIcon/> +91-9634689949
			</div>
			<div class="contact">
			<AlternateEmailIcon/> utkarshshukla.gs@gmail.com
			</div>
			<div class="contact"> 
			<HomeIcon/> Bahadurgarh, Haryana - 124507
			</div>
			</Typography>

			</Grid>
			</Grid>
			<br/>
			<Box class="center">
			<Typography variant="body2" gutterBottom id="seeuson">See us on</Typography>
			<br/>
			<div class="social" ><Link><FacebookIcon fontSize="large" id="icon"/></Link></div>
			<div class="social" ><Link><InstagramIcon fontSize="large" id="icon"/></Link></div>
			<div class="social" ><Link><TwitterIcon fontSize="large" id="icon"/></Link></div>
			</Box>
			</Box>
		);
	}
}