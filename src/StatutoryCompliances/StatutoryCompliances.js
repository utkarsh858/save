import React,{Component} from 'react';
import {
	Box,
	Typography,
	Button,
} from '@material-ui/core';
import {a} from "react-router-dom";
import "./StatutoryCompliances.css"

export default class StatutoryCompliances extends Component {


	render(){
	return(
<Box id="compliances">
				<Typography gutterBottom variant="h5" display="block" class="section">
			STATUTORY COMPLIANCES
			</Typography><br/>
			<center>
			<p>
The Society for Applied Value Education is a registered trust under the Public Trust Act. It is also registered u/s 12A of the Income Tax Act, 1961 and donations made to Society for Applied Value Education are exempt u/s 80G of the Income Tax Act.

			</p>
			<a className="a" href="https://drive.google.com/file/d/1Ik-N4z420NE1lMaXAckd3fxtTpgq0dza/view?usp=sharing" target="_blank"><Button class="sc-1" >12A</Button></a>
			<a className="a" href="https://drive.google.com/file/d/1Ei7DFd-ss5doIaAcLgKgegyfkJHmpCCx/view?usp=sharing" target="_blank"><Button class="sc-2" >80(G)</Button></a>
			<a className="a" href="https://drive.google.com/file/d/1mYfkptnBvxUR73g-XDa-Bl0Ru51gLO3e/view?usp=sharing" target="_blank"><Button class="sc-3" >PAN</Button></a>
			<a className="a" href="https://drive.google.com/file/d/1l9Xoqt06I73QkSQjXYUa5SLYlDcpl6oH/view?usp=sharing" target="_blank"><Button class="sc-4" >Trust Deed</Button></a>
			</center>
</Box>
	)
}}