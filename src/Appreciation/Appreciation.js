import React,{Component} from 'react';
import {Box,Grid,Card,CardContent,CardMedia,IconButton,Typography
} from '@material-ui/core';
import {Pagination} from '@material-ui/lab'; 
import {ArrowForward,ArrowBack} from '@material-ui/icons'
import filler from "./filler.jpg";
import './Appreciation.css';

export default class Appreciation extends Component{
	render(){
		return(
			<Box id="appreciation">
			<Grid container spacing={9}>
			<Grid item xs={12} sm={6}>
			<img src={filler} className="profile"/>
			</Grid>
			<Grid item xs={12} sm={6}>
			"SAVE saved me" <br/>
			-Napolean French Conquerer
			</Grid>
			</Grid>

			<Grid container spacing={9}>
			<Grid item xs={12} sm={2}>
			<Card>
        		<IconButton aria-label="add to favorites">
          			<ArrowBack />
        		</IconButton>
			</Card>
			</Grid>
			<Grid item xs={12} sm={2}>
			<Card>
			<CardMedia />
			<CardContent>
			</CardContent>
			</Card>
			</Grid>
			<Grid item xs={12} sm={2}>
			<Card>
			<CardMedia />
			<CardContent>
			</CardContent>
			</Card>
			</Grid>
			<Grid item xs={12} sm={2}>
			<Card>
			<CardMedia />
			<CardContent>
			</CardContent>
			</Card>
			</Grid>			<Grid item xs={12} sm={2}>
			<Card>
			<CardMedia />
			<CardContent>
			</CardContent>
			</Card>
			</Grid>			<Grid item xs={12} sm={2}>
			<Card>
        		<IconButton aria-label="add to favorites">
          			<ArrowForward />
        		</IconButton>
			</Card>
			</Grid>

			</Grid>
			<Pagination count={4} />
			</Box>
		);
	}
}