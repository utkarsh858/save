import React,{Component} from 'react';
import {Box,Grid,Card,CardContent,CardMedia,IconButton,Typography
} from '@material-ui/core';
import filler from "./filler.jpg";
import './CaseStudies.css';

export default class CaseStudies extends Component{
	render(){
	return(
		<Box id="casestudies">
		<Grid container spacing={12}>
		<Grid item xs={12} sm={6}>
		Meet Napolean Bonaparte<br/>
		On who got saved by SAVE.
		</Grid>
		<Grid item xs={12} sm={6}>
		<img src={filler} className="profile"/>
		</Grid>
		</Grid>
		
		</Box>
		);
	}
}