import React,{Component} from 'react';
import {Box,
	Grid,
	Card,
	CardContent,
	CardMedia,
	Typography,
} from '@material-ui/core';
 import  {Link} from 'react-router-dom';
import {ArrowForward} from '@material-ui/icons'
import api from '../api'
import ReactPaginate from 'react-paginate';

import './News.css'

export default class News extends Component{
	constructor(props){
		super(props)
		this.state = {
			our_works_visual : [],
			isLoading : false,
			perPage: 6,
			current_page: 0,
			limit: 3,
		}
	}
	
	handleClickOpen = (title,sub_title,cover_image,content,date,images) => {
    window.localStorage.setItem('title',title);
    window.localStorage.setItem('sub_title',sub_title);
    window.localStorage.setItem('cover_image',cover_image);
    window.localStorage.setItem('content',content);
    window.localStorage.setItem('date',JSON.stringify(date));
    window.localStorage.setItem('images',JSON.stringify(images));
  	}



  	setNumofPages = async() => {
  		this.setState({isLoading:true})
  		await api.getNumOfWorks().then(num => {

  			this.setState({
				limit : Math.ceil(num.data/(this.state.perPage)),
  			})
  			this.updatePage()
  		})
  	}

	componentDidMount = async () => {
		this.setNumofPages();
	}
	nextPage = ()=>{
		this.setState({
			current_page : ((this.state.current_page)+1)%(this.state.limit),
		});
		this.updatePage();
	}

	previousPage = ()=>{
		this.setState({
			current_page : (this.state.current_page+this.state.limit-1)%(this.state.limit)
		})
		this.updatePage();
	}
	updatePage = async () => {

		

		await api.getOurWorksByPage(this.state.current_page+1,this.state.perPage).then(our_works => {	

			this.setState({

				isLoading: false,
				our_works_visual : our_works.data.map((data) => {
				return (
					<Grid item xs={12} sm={4}>

					<Link to="/article" onClick={()=>{
						this.handleClickOpen(data.title,data.sub_title,data.cover_image,data.content,data.date,data.images);
					}} class="Link">
					<Card 
					class="work-card news-card-width"
					>
					<CardMedia
					class="news-card-media"
					component='img'
					height='300'
					image={data.cover_image}
					title="Paella dish"
					/>
					<CardContent>
					<Typography variant="h6" gutterBottom>{data.title}</Typography>
					 <br />
					 <Typography variant="body1" gutterBottom>
					{data.sub_title}
					</Typography>
					</CardContent>

					
					<ArrowForward id="work-card-icon"/>
					
					</Card>
					</Link>
					</Grid>
					)
				})
			})
		})
		
	}



	render(){
		return (
			<Box id="news">
			<Typography gutterBottom variant="h5" display="block" class="section">
			NEWS
			</Typography><br/>
			<center>
			<Grid container spacing={9}>
			{this.state.our_works_visual}
			</Grid>
			</center>
			<br/>

			<ReactPaginate
			previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            pageCount={this.state.limit}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={(e) => { 
            	this.setState({
            		current_page:e.selected
            	})
             this.updatePage();}}

			containerClassName={"appr-pagination appr-correct"}
            pageClassName={"appr-pagination-elem"}
            pageLinkClassName={'appr-pagination-elem-link'}
            activeClassName={"appr-pagination-active"}
            activeLinkClassName={"appr-pagination-active-link"}
            previousClassName={'appr-pagination-prev'}
            nextClassName={'appr-pagination-next'}
            />


			</ Box>
			)
		}
	}


