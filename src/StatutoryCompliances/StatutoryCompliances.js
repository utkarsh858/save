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
			<Button class="sc-1" onClick={()=>{window.location.href="https://drive.google.com/file/d/1Ik-N4z420NE1lMaXAckd3fxtTpgq0dza/view?usp=sharing";}} >12A</Button>
			<Button class="sc-2" onClick={()=>{window.location.href="https://drive.google.com/file/d/1Ei7DFd-ss5doIaAcLgKgegyfkJHmpCCx/view?usp=sharing";}} >80(G)</Button>
			<Button class="sc-3" onClick={()=>{window.location.href="https://drive.google.com/file/d/1mYfkptnBvxUR73g-XDa-Bl0Ru51gLO3e/view?usp=sharing";}} >PAN</Button>
			<Button class="sc-4" onClick={()=>{window.location.href="https://drive.google.com/file/d/1GZEeUGv4b4et17aIkPvCudsnRfyo8Uu0/view?usp=sharing";}} >Trust Deed</Button>
			</center>
</Box>
	)
}}