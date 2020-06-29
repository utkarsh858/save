import React,{Component} from 'react';
import {
	Box,Grid,Card,CardContent,CardActions,CardMedia,IconButton,Typography,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Button,
} from '@material-ui/core';
import {Pagination} from '@material-ui/lab'; 
import {ArrowForward,ArrowBack,FormatQuoteRounded} from '@material-ui/icons'
// import {ArrowForward} from '@material-ui/icons'
import Calendar from 'react-calendar';
import api from '../api'

import './News.css';

export default class News extends Component{
		constructor(props){
		super(props)
		this.state = {
			news_visual : [],
			isLoading : false,
			perPage: 6,
			currentPage: 1,
			numOfPages: 16,
			open: false,
			dialogTitle: '',
			dialogContent: '',
			dialogDate: '',
		}
	}

handleClickOpen = (title,content,date) => {
    this.setState({
    open: true,
    dialogTitle : title,
    dialogDate : date,
    dialogContent : content,
    });
  	}

	handleClose = () => {
    this.setState({ open: false });
  	}

	componentDidMount = async () => {
		this.updatePage(1)
	}

	updatePage = async (pageNum) => {
		this.setState({isLoading:true, currentPage : pageNum})

		await api.getNews(this.state.currentPage,this.state.perPage).then(news => {	
			// our_works = JSON.parse(our_works);
			// console.log(our_works)
			this.setState({
				// our_works : our_works.data.data,
				numOfPages : Math.ceil(news.data.length/this.state.perPage),
				isLoading: false,
				// numOfPages : Math.ceil((our_works.data.data_length)/(this.state.perPage)),
				news_visual : news.data.map((data) => {
				return (
					<Grid item xs={12} sm={4}>
					<Card 
					class="card-media"
					onClick={()=>{this.handleClickOpen(data.title,data.content,'')}}>
					<CardMedia
					component='img'
					height='300'
					image='https://i.ibb.co/d2qnXbP/Whats-App-Image-2020-06-16-at-10-22-05-AM.jpg'
					title="Paella dish"
					/>
					<CardContent>
					<Typography variant="h6" gutterBottom>{data.title}</Typography>
					 <br />
					 <Typography variant="body1" gutterBottom>
					{data.content}
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
			<Box id="news" class="colour">
			 <Typography gutterBottom variant="h5" component="h2" class="section">
            NEWS
          </Typography>
          <Grid container spacing={1}>
          <Grid item xs={12} sm={12}>
          <Grid container spacing={9}>
			{this.state.news_visual}
			</Grid>
			<br/>

			</Grid>
          
			</Grid>
			<Box class="case-page-nav">
			<IconButton onClick={this.prevPage} class="case-back"><ArrowBack/></IconButton>
			<Pagination 
			class="case-nav"
			count={this.state.numOfPages}
			page={this.state.currentPage}
			onChange={(e,p) => {this.updatePage(p)}}
			variant="outlined"
			shape="rounded"
			/>
			<IconButton onClick={this.nextPage} class="case-forw"><ArrowForward/></IconButton>
			</Box>


			<Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        	>
          <DialogTitle id="alert-dialog-title">{this.state.dialogTitle}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            {this.state.dialogContent}
            {this.state.date}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
			</Box>
			);
		}
		// Unpublished Calender item
		// <Grid item xs={12} sm={6}>

		// 	<Calendar />
		// 	</Grid>
	}