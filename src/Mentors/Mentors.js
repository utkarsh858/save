import React,{Component} from 'react';
import {Box,Grid,Typography} from '@material-ui/core';
import api from '../api'	
import Member from "../Team/Member/Member.js"
// import '../Team/Team.css';


export default class Mentors extends Component{

	constructor(props){
		super(props)
		this.state = {
			our_team_visual :[],
			isLoading : false,
			open : false,
			our_team :[{
				"name":"Dr. Vivek Bindra",
				"image":"https://i.ibb.co/3yc3vK5/Dr-Vivek-Bindra.png",
				"description":"CEO Bada-Business",
				"achievements":[
				"Internationally Acclaimed Motivational Speaker and a Business Coach",
				"Owner of World’s Most Subscribed Entrepreneurship YouTube Channel, with more than 12 million subscribers",
				"Acclaimed Executive Coach for over Top 100 CEO’s in India",
				"Trusted Advisor for Over 500 Corporate Houses",
				"Bestowed with the Honorary Title of ‘Think Tank of Corporate Asia’ by World Leadership Federation, Dubai",
				"Awarded the Best Leadership Trainer in Asia title by Marshall Goldsmith at the World HRD Congress",
				"Awarded with India’s Greatest Brands and Leaders – Pride of the Nation Award in a ceremonial function hosted by PricewaterhouseCoopers (PwC)",
				"Awarded the Best CEO Coach in India by Times of India – Speaking Tree.",
				"Awarded the Best Corporate Trainer in India by Maruti Suzuki for Two Consecutive Years",
				"Holds a place in the Esteemed Golden Book of Records for Training the Largest Gathering of HR Professionals under one Roof on - Can HR Become a CEO?"
				]
			},{
				"name":"Suruchi Mittal",
				"image":"https://i.ibb.co/1R9Zqjj/suruchui-mittar.jpg",
				"description":"Director - Learning & Development and Culture, Appster",
				"achievements":[
				"Former Associate Professor, National Institute Of Fashion & Technology (NIFT), New Delhi",
				"Ph.D. (Human Resource Management) from National Institute of Fashion and Technology",
				"Published and presented more than 30 Papers in Conferences, Journals and magazines",
				"Certified Coach from ICF , Neuroleadership",
				"M.C.M from Pune University",
				"M.B.A from Delhi University",
				"Proven skills for identifying, attracting and developing world class talent on an international scale."
				]
			}]
		}
	}

	componentDidMount = async() => {
		this.updatePage()
	}

	updatePage = async() => {

			this.setState({
				our_team_visual : this.state.our_team.map((data,index)=>{
					return(

						<Member data={data} index={index} />
					)
				})
			})

	}

	render(){
		return(
			<Box id="team">
			<Typography gutterBottom variant="h5" display="block" class="section">
			OUR MENTORS
			</Typography>
			<br/>
			<Grid container className="bg">
			{this.state.our_team_visual}
			</Grid>
			</Box>
			);
	}	
}