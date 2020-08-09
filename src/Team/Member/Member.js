import React,{Component} from 'react';
import {Box,Grid,Typography,
	Dialog,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@material-ui/core';
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
		// let achievements_visual = this.props.data.achievements.map((achievement)=>{
		// 	return(
		// 		<li class="mem-item">{achievement}</li>
		// 		)
		// 	})

			if(Math.floor((this.props.index)/3)%2===0)
				return(
			<React.Fragment>
			<Grid item xs={12} sm={4}>

			<div  className="cell" onClick={ () => {this.handleClickOpen()} }>

			<div  className="right">
			<Typography variant="h5" display="block" gutterBottom class="team-name">
			{this.props.data.name}
			</Typography>
			<Typography variant="body2" gutterBottom  class="team-desc">
			{this.props.data.description}</Typography>
			</div>
			<img src={this.props.data.image} alt="" class='tile-right' />
			</div>

			</Grid>







			<Dialog
			open={this.state.open}
			onClose={this.handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			class="mem-box"
			maxWidth="xl"
			fullWidth={true}
			>

			<DialogTitle  id="dialog-title" class="mem-dialog-title">
			</DialogTitle>


			<DialogContent class="mem-content">
			<Grid container justify="center">

			<Grid item xs={12} sm={6} class="mem-text-cont">
			<DialogContentText 
			class="mem-content-text"
			id="alert-dialog-description">

			<Box class="mem-title">
			{this.props.data.name}
			</Box>
			{this.props.data.content}

			</DialogContentText>
			</Grid>			
			<Grid item xs={12} sm={6} spacing={9}>
			<img src={this.props.data.image} alt="" class="mem-image"/>

			</Grid>
			</Grid>




			</DialogContent>
			</Dialog>
			</React.Fragment>


			)
			else return(
			

				<React.Fragment>

			<Grid item xs={12} sm={4}>


			<div  className="cell" onClick={ () => {this.handleClickOpen()} }>
			<div  className="left">
			<Typography variant="h5" display="block" gutterBottom class="team-name">
			{this.props.data.name}
			</Typography>
			<Typography variant="body2" gutterBottom class="team-desc">
			{this.props.data.description}</Typography>
			</div>
			<img src={this.props.data.image} alt="" class='tile-left' />


			</div>

			</Grid>











			<Dialog
			open={this.state.open}
			onClose={this.handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			class="mem-box"
			maxWidth="xl"
			fullWidth={true}
			>

			<DialogTitle  id="dialog-title" class="mem-dialog-title">
			</DialogTitle>


			<DialogContent class="mem-content">
			<Grid container justify="center">
			<Grid item xs={12} sm={6} spacing={9}>
			<img src={this.props.data.image}alt="" class="mem-image"/>

			</Grid>
			<Grid item xs={12} sm={6} class="mem-text-cont">
			<DialogContentText 
			class="mem-content-text"
			id="alert-dialog-description">

			<Box class="mem-title">
			{this.props.data.name}
			</Box>
			{this.props.data.content}

			</DialogContentText>
			</Grid>
			</Grid>




			</DialogContent>
			</Dialog>
			</React.Fragment>

			)
		}
	}