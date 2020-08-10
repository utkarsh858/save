import React,{Component} from 'react';
import {Box,Card,Typography,Grid
} from '@material-ui/core';
import {FormatQuoteRounded} from '@material-ui/icons'
import ReactPaginate from 'react-paginate';
import './Testimonials.css';
import api from "../api"


export default class Testimonials extends Component{
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
		await api.getTestimonials(1,100).then(appreciation_list => {
			this.setState({
				isLoading:false,
				appreciations : appreciation_list.data,
				limit : appreciation_list.data.length,
			})	

			this.updatePage();
		})
	}


	updatePage = () => {

		this.setState({
			name : this.state.appreciations[this.state.current_page].name,
			image : this.state.appreciations[this.state.current_page].image,
			quote : this.state.appreciations[this.state.current_page].quote,
			description:this.state.appreciations[this.state.current_page].description,
		});
	}
	
	render(){
		return(
			<Box id="testimonials">
			
			<Typography gutterBottom variant="h5" display="block" class="section">
			TESTIMONIALS
			</Typography>


			
			<Grid container spacing={1}>
			
			<Grid item xs={12} sm={6}>
			<Card class="appr-textbox">
			<Box class="appr-upper-part">




			<Typography variant="body1" gutterBottom class="appr-quote">
			<FormatQuoteRounded id="appr-quotemark-start"/>
			{this.state.quote}
			<FormatQuoteRounded id="appr-quotemark-end"/>
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
			<Grid item xs={12} sm={6} >
			<Card class="appr-image-cont">
			<img src={this.state.image} class="appr-image" alt=""/>
			</Card>
			</Grid >
			</Grid>
			
			
			<br/>
			<ReactPaginate
			previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            pageCount={this.state.limit}
            marginPagesDisplayed={2}
            pageRangeDisplayed={100}
            onPageChange={(e) => { 	this.setState({
			current_page : e.selected,
		}); this.updatePage();}}

			containerClassName={"appr-pagination"}
            pageClassName={"appr-pagination-elem"}
            pageLinkClassName={'appr-pagination-elem-link'}
            activeClassName={"appr-pagination-active"}
            activeLinkClassName={"appr-pagination-active-link"}
            previousClassName={'appr-pagination-prev'}
            nextClassName={'appr-pagination-next'}
            />

			</Box>
			);
	}
}