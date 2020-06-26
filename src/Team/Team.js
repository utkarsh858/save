import React,{Component} from 'react';
import {Box,Grid,Typography} from '@material-ui/core';
import filler from './filler.png';
import api from '../api'	
import './Team.css';


export default class Team extends Component{

	constructor(props){
		super(props)
		this.state = {
			our_team_visual :[],
			isLoading : false,
			open : false,
		}
	}

	componentDidMount = async() => {
		this.updatePage()
	}

	updatePage = async() => {
		this.setState({isLoading:true})

		await api.getOurTeam(1,15).then(our_team => {
			console.log(our_team);
			this.setState({
				isLoading:false,
				our_team_visual : our_team.data.map((data,key)=>{
					if(Math.floor(key/3)%2==0)
					return (

						<Grid item xs={12} sm={4}>
						<div  className="cell">
						<img src={filler} class='tile-left' />

						<div  className="left">
						<Typography variant="h5" display="block" gutterBottom>
						{data.name}
						</Typography>
						<Typography variant="body2" gutterBottom>
						{data.description}</Typography>
						</div>
						</div>

						</Grid>
					)
					else 
					return(

						<Grid item xs={12} sm={4}>
						<div  className="cell">
						<div  className="right">
						<Typography variant="h5" display="block" gutterBottom>
						{data.name}
						</Typography>
						<Typography variant="body2" gutterBottom>
						{data.description}</Typography>
						</div>
						<img src={filler} class='tile-right' />

						
						</div>

						</Grid>
						)
				})
			})
		})
	}

	render(){
		return(
			<Box id="team">
			<Typography gutterBottom variant="h5" display="block" class="section">
			MEET OUR TEAM
			</Typography>
			<br/>
			<Grid container className="bg">
			{this.state.our_team_visual}
			</Grid>
			</Box>
			);
	}	
}