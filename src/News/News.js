import React,{Component} from 'react';
import {Box,
	Button,
	Grid,
	Card,
	CardContent,
	CardActions,
	CardMedia,
	IconButton,
	Typography,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	makeStyles
} from '@material-ui/core';
import {
Modal,
ModalDialog,
ModalHeader,
ModalTitle,
ModalBody,
ModalFooter
} from 'react-bootstrap'
import {Pagination} from '@material-ui/lab'; 
import {ArrowForward,ArrowBack,FormatQuoteRounded} from '@material-ui/icons'
import api from '../api'
import ReactPaginate from 'react-paginate';
import GridGallery from 'react-grid-gallery';

import './News.css'

export default class News extends Component{
	constructor(props){
		super(props)
		this.state = {
			news_visual : [],
			isLoading : false,
			perPage: 8,
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


  	setNumOfPages = async() => {
  		this.setState({isLoading:true})
  		await api.getNumOfNews().then(num => {
  			console.log("Number of Pages");
  			console.log(num.data/(this.state.perPage));
  			this.setState({
				limit : Math.ceil(num.data/(this.state.perPage)),
  			})
  			this.updatePage()
  		})
  	}

	componentDidMount = async () => {
		this.setNumOfPages();
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
		

		await api.getNews(this.state.current_page+1,this.state.perPage).then(news => {	
			// our_works = JSON.parse(our_works);
			// console.log(our_works)
			this.setState({
				// our_works : our_works.data.data,
				isLoading: false,
				// numOfPages : Math.ceil((our_works.data.data_length)/(this.state.perPage)),
				news_visual : news.data.map((data) => {
				return (
					<Grid item xs={12} sm={3}>
					<Card 
					class="card news-card-width"
					onClick={()=>{
						this.handleClickOpen(data.title,data.sub_title,data.cover_image,data.content,data.date,data.images);
				window.location.href = window.location.origin+"/article"

					}}
					>
					<CardMedia
					class="card-media"
					component='img'
					height={200}
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

					
					<ArrowForward id="card-icon"/>
					
					</Card>
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
		
			<Grid container spacing={9} class="news-bg">
			{this.state.news_visual}
			</Grid>
			<br/>

			<ReactPaginate
			previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            pageCount={this.state.limit}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={(e) => { console.log(e); this.state.current_page=e.selected; this.updatePage();}}

			containerClassName={"pagination pag-correct"}
            pageClassName={"pagination-elem"}
            pageLinkClassName={'pagination-elem-link'}
            activeClassName={"pagination-active"}
            activeLinkClassName={"pagination-active-link"}
            previousClassName={'pagination-prev'}
            nextClassName={'pagination-next'}
            />
         
			</ Box>
			)
		}
	}
