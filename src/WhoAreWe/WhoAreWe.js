import React,{Component} from 'react';
import{
	Grid,
	Box,
	Typography,
} from '@material-ui/core';
import './WhoAreWe.css';

export default class WhoAreWe extends Component{
	render(){
		return (
			<Box id="whoarewe">
			<Grid container justify="space-between">
			<Grid item xs={12} sm={4} >
			<img src={require("../images/cond-1.png")} class="waw-tile" />
			</Grid>
			<Grid item xs={12} sm={4} >
			<img src={require("../images/cond-2.png")} class="waw-tile" />
			</Grid>
			<Grid item xs={12} sm={4} >
			<img src={require("../images/cond-3.png")} class="waw-tile" />
			</Grid>
			<Grid item xs={12} sm={3} >
			<img src={require("../images/cond-4.png")} class="waw-tile" />
			</Grid>
			<Grid item xs={12} sm={3} >
			<img src={require("../images/cond-5.png")} class="waw-tile" />
			</Grid>
			<Grid item xs={12} sm={3} >
			<img src={require("../images/cond-6.png")} class="waw-tile" />
			</Grid>
			<Grid item xs={12} sm={3} >
			<img src={require("../images/cond-7.png")} class="waw-tile" />
			</Grid>
			</Grid>

			<Box class="waw-text">
			Almost negligible physical, mental, spiritual, or financial leveraging by social organizations like other NGOs to curb these tendencies
			at its root level especially for youth.
			</Box>
			</Box>

		)
	}
}