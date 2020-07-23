import React,{Component} from 'react';
import {Box,Grid,Typography} from '@material-ui/core';
import api from '../api'	
import Member from "./Member/Member.js"
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
				our_team_visual : our_team.data.map((data,index)=>{
					return(

						<Member data={data} index={index} />
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