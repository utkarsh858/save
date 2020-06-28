import React,{Component} from 'react';
import {Box,Grid,Card,CardContent,CardMedia,IconButton,Typography
} from '@material-ui/core';
import {Pagination} from '@material-ui/lab'; 
import {ArrowForward,ArrowBack,FormatQuoteRounded} from '@material-ui/icons'
import filler from "./filler.jpg";
import HorizontalGallery from 'react-dynamic-carousel'
import './Appreciation.css';
import api from "../api"


export default class Appreciation extends Component{
	constructor(props){
		super(props)
		this.state = {
			appreciations_visual : [],
			isLoading : false,
		}
	}
		componentDidMount = async()=>{
			this.updatePage()
		}

		updatePage = async() => {
			this.setState({isLoading:true})
			await api.getAppreciations(1,20).then(appreciations => {
				this.setState({
					isLoading:false,
					appreciations_visual : appreciations.data.map((data) => {
						return(
							<Box class="appr-card">
							<Grid container spacing={0}>
							<Grid item xs={12} sm={6} >
							<Card class="appr-image">
							<img src={filler} class="appr-image"/>
							</Card>
							</Grid >
							<Grid item xs={12} sm={6}>
							<Card class="appr-textbox">
							<Box class="appr-upper-part">


							<FormatQuoteRounded id="appr-quotemark-start"/>

							<Typography variant="body1" gutterBottom class="appr-quote">{data.quote}
							</Typography>

							<FormatQuoteRounded id="appr-quotemark-end"/>

							</Box>

							<Box class="appr-lower-part">
							<Typography variant="body1" gutterBottom>
							{data.name}<br/>

							</Typography>
							<Typography variant="body2" gutterBottom>
							{data.description}<br/>	
							</Typography>
							</Box>
							</Card>
							</Grid>
							</Grid>
    				</Box>
						)
					})

				})
				
			})
		}
	
	render(){
		return(
			<Box id="appreciation">
			
			<Typography gutterBottom variant="h5" display="block" class="section">
			APPRECIATION
			</Typography>


			<HorizontalGallery     
			    tiles= {this.state.appreciations_visual}
			    elementWidth={1000}
    fadeDistance={100}
    minPadding={20} class="appr-gallery"
    />
			</Box>
		);
	}
}