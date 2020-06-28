import React,{Component} from 'react';
import {Box,Grid,Card,CardContent,CardMedia,IconButton,Typography
} from '@material-ui/core';
import {Pagination} from '@material-ui/lab'; 
import {ArrowForward,ArrowBack,FormatQuoteRounded} from '@material-ui/icons'
import filler from "./filler.jpg";
import './Appreciation.css';
import api from "../api"


export default class Appreciation extends Component{
	constructor(props){
		super(props)
		this.state = {
			appreciations : [],
			isLoading : false,
			current_page: 0,
			limit : 1,
			name:"",
			quote:"",
			description:"",
			image:"",
		}
	}
	componentDidMount = async()=>{
		this.setState({isLoading:true})
		await api.getAppreciations(1,20).then(appreciation_list => {
			this.setState({
				isLoading:false,
				appreciations : appreciation_list.data,
				limit : appreciation_list.data.length,
			})	

			this.setState({
				name : this.state.appreciations[this.state.current_page].name,
				image : this.state.appreciations[this.state.current_page].image,
				quote : this.state.appreciations[this.state.current_page].quote,
				description:this.state.appreciations[this.state.current_page].description,
			});
		})
	}

	nextPage = ()=>{
		this.setState({
			current_page : (this.state.current_page+1)%this.state.limit
		});
		this.setState({
			name : this.state.appreciations[this.state.current_page].name,
			image : this.state.appreciations[this.state.current_page].image,
			quote : this.state.appreciations[this.state.current_page].quote,
			description:this.state.appreciations[this.state.current_page].description,
		});
	}

	previousPage = ()=>{
		this.setState({
			current_page : (this.state.current_page+this.state.limit-1)%this.state.limit
		})
		this.setState({
			name : this.state.appreciations[this.state.current_page].name,
			image : this.state.appreciations[this.state.current_page].image,
			quote : this.state.appreciations[this.state.current_page].quote,
			description:this.state.appreciations[this.state.current_page].description,
		});
	}

	updatePage = (page) => {
		this.setState({
			current_page : page,
		})
		this.setState({
			name : this.state.appreciations[this.state.current_page].name,
			image : this.state.appreciations[this.state.current_page].image,
			quote : this.state.appreciations[this.state.current_page].quote,
			description:this.state.appreciations[this.state.current_page].description,
		});
	}
	
	render(){
		return(
			<Box id="appreciation">
			
			<Typography gutterBottom variant="h5" display="block" class="section">
			APPRECIATION
			</Typography>



			<Grid container spacing={1}>
			<Grid item xs={12} sm={6} >
			<Card class="appr-image-cont">
			<img src={filler} class="appr-image"/>
			</Card>
			</Grid >
			<Grid item xs={12} sm={6}>
			<Card class="appr-textbox">
			<Box class="appr-upper-part">




			<Typography variant="body1" gutterBottom class="appr-quote">
			{this.state.quote}
			</Typography>



			</Box>

			<Box class="appr-lower-part">
			<Typography variant="body1" gutterBottom>
			{this.state.name}<br/>

			</Typography>
			<Typography variant="body2" gutterBottom>
			{this.state.description}<br/>	
			</Typography>

			</Box>
			</Card>
			</Grid>
			</Grid>
			<br/>
			<Box class="appr-page-nav">
			<IconButton onClick={this.prevPage} class="appr-back"><ArrowBack/></IconButton>
			<Pagination
			class="appr-nav"
			 count={this.state.limit}
			  page={this.state.current_page}
			   onChange={(e,p) => {this.updatePage(p-1)}} 
			   variant="outlined" 
			   shape="rounded" 
			   hideNextButton={true}
			   hidePrevButton={true}
			   />
			<IconButton onClick={this.nextPage} class="appr-forw"><ArrowForward/></IconButton>
			</Box>
			</Box>
			);
	}
}