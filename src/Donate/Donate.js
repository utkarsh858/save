import React,{Component} from 'react';
import {Button,
Box,
Grid,
TextField} from '@material-ui/core';

export default class Donate extends Component{
	render(){
		return(
			<Box>
			<Grid container>
			<Grid item xs= {5} sm={1}>
			1000
			</Grid>
			<Grid item xs= {5} sm={1}>
			2000
			</Grid>
			<Grid item xs= {5} sm={1}>
			3000
			</Grid>
			<Grid item xs= {5} sm={1}>
			4000
			</Grid>
			<Grid item xs= {5} sm={1}>
			5000
			</Grid>
			<Grid item xs= {5} sm={1}>
			6000
			</Grid>
			<Grid item xs= {5} sm={1}>
			10,000
			</Grid>
			<Grid item xs= {5} sm={2}>
			Custom <TextField />
			</Grid>
			<Grid item xs= {5} sm={1}>
			<Button>Donate</Button>
			</Grid>
			</Grid>
			</Box>
		)
	}
}