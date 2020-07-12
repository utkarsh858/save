import React,{Component} from 'react';
import {Box,Grid,Typography,Tooltip,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@material-ui/core';
import filler from '../filler.png';
import "./Member.css"

export default class Member extends Component{
	constructor(props){
		super(props)
		this.state = {
			open: false,
		}
	}

	handleClickOpen = () => {
		this.setState({
			open: true,
		});
	}

	handleClose = () => {
		this.setState({ open: false });
	}
	render(){

		let achievements_visual = this.props.data.achievements.map((achievement)=>{
			return(
				<li class="mem-item">{achievement}</li>
				)
			})


			if(Math.floor(this.props.key/3)%2==0)
				return(
			<React.Fragment>
			<Grid item xs={12} sm={4}>

			<div  className="cell" onClick={ () => {this.handleClickOpen()} }>
			<img src={filler} class='tile-left' />

			<div  className="left">
			<Typography variant="h5" display="block" gutterBottom class="team-name">
			{this.props.data.name}
			</Typography>
			<Typography variant="body2" gutterBottom  class="team-desc">
			{this.props.data.description}</Typography>
			</div>
			</div>

			</Grid>
			<Dialog
			open={this.state.open}
			onClose={this.handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			class="mem-box"
			>

			<DialogTitle  id="dialog-title" class="mem-title">
			{this.props.data.name}
			</DialogTitle>


			<DialogContent  class="mem-content">
			<DialogContentText 
			class="dialog-content-text"
			id="alert-dialog-description">

			<img src={this.props.data.image} class="mem-image"/>
			<ul class="mem-list">
			{achievements_visual}
			</ul>

			</DialogContentText>

			</DialogContent>
			</Dialog>
			</React.Fragment>
			)
			else return(
				<React.Fragment>

			<Grid item xs={12} sm={4}>


			<div  className="cell" onClick={ () => {this.handleClickOpen()} }>
			<div  className="right">
			<Typography variant="h5" display="block" gutterBottom class="team-name">
			{this.props.data.name}
			</Typography>
			<Typography variant="body2" gutterBottom class="team-desc">
			{this.props.data.description}</Typography>
			</div>
			<img src={filler} class='tile-right' />


			</div>

			</Grid>
			<Dialog
			open={this.state.open}
			onClose={this.handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			class="mem-box"

			>

			<DialogTitle  id="dialog-title" class="mem-title">
			{this.props.data.name}
			</DialogTitle>


			<DialogContent class="mem-content">
			<DialogContentText 
			class="dialog-content-text"
			id="alert-dialog-description">

			<img src={this.props.data.image} class="mem-image"/>
			<ul class="mem-list">
			{achievements_visual}
			</ul>

			</DialogContentText>

			</DialogContent>
			</Dialog>
			</React.Fragment>

			)
		}
	}