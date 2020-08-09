import React,{Component} from 'react';
import {Box,Grid,Typography} from '@material-ui/core';
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
				"content":"He is the CEO of BadaBusiness and being an acclaimed motivational speaker cum business coach has trained many in the top CEO's of India. His YouTube channel has already gained more than 13 million subscribers. His special ability to make business grow exponentially is helping us move forward in our mission."
				
			},{
				"name":"Suruchi Mittal",
				"image":"https://i.ibb.co/1R9Zqjj/suruchui-mittar.jpg",
				"description":"Director - Learning & Development and Culture, Appster",
				"content":"Dr. Suruchi is a Ph.D. in Human Resource Management from National Institute of Fashion and Technology, New Delhi. She is a Human Resources and Learning & Development Professional and an Executive Coach with over 20 years of diverse experience across sectors like FMCG, IT, Education, Fashion Retail, Fashion Export. She is also involved in socio-economic development initiatives for countries like India, Asia, China, Myanmar, Ethiopia, Vietnam in both Indian and Multinational companies. Presently, she is an Independent Consultant who has shaped some high performing teams with progressive talent practices, prolific communication, and a robust learning and development programs."
				
			},{
				"name":"Dr. Himanshu Asnani",
				"image":"https://i.ibb.co/6WKtMch/11-Himanshu-Asnani.jpg",
				"description":"Assistant Professor, University of Washington",
				"content":"Dr. Himanshu is the recipient of 2014 Marconi Society Paul Baran Young Scholar Award. He received his Ph.D. in Electrical Engineering Department in 2014 from Stanford University. Prior to that, he received his B.Tech. from IIT Bombay in 2009 and M.S. from Stanford University in 2011. Now, Now, he is an affiliate assistant professor at University of Washington."
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
			<Box id="team" class="document">
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