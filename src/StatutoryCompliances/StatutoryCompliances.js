import React,{Component} from 'react';
import {
	Box,
	Typography,
	Button,
} from '@material-ui/core';

import "./StatutoryCompliances.css"

export default class StatutoryCompliances extends Component {


	render(){
	return(
<Box id="compliances">
				<Typography gutterBottom variant="h5" display="block" class="section">
			STATUTORY COMPLIANCES
			</Typography><br/>
			<center>
			<Button class="sc-1" onClick={()=>{window.location.href="";}} >12A</Button>
			<Button class="sc-2" onClick={()=>{window.location.href="";}} >80(G)</Button>
			<Button class="sc-3" onClick={()=>{window.location.href="";}} >PAN</Button>
			</center>
</Box>
	)
}}