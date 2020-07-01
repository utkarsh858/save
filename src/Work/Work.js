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

import './Work.css'

export default class Work extends Component{
	constructor(props){
		super(props)
		this.state = {
			our_works_visual : [],
			isLoading : false,
			perPage: 6,
			current_page: 0,
			limit: 3,
			open: false,
			dialogTitle: '',
			dialogSubtitle:'',
			dialogImages :[],
			dialogCoverImage: '',
			dialogContent: '',
			dialogDate: '',
		}
	}
	
	handleClickOpen = (title,sub_title,cover_image,content,date,images) => {
    this.setState({
    open: true,
    dialogTitle : title,
    dialogSubtitle : sub_title,
    dialogCoverImage : cover_image,
    dialogContent : content,
    dialogDate : date,
    dialogImages : images,
    });
  	}

	handleClose = () => {
    this.setState({ open: false });
  	}

  	setNumofPages = async() => {
  		this.setState({isLoading:true})
  		await api.getNumOfWorks().then(num => {
  			console.log("Number of Pages");
  			console.log(num.data/(this.state.perPage));
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
			// our_works = JSON.parse(our_works);
			// console.log(our_works)
			this.setState({
				// our_works : our_works.data.data,
				isLoading: false,
				// numOfPages : Math.ceil((our_works.data.data_length)/(this.state.perPage)),
				our_works_visual : our_works.data.map((data) => {
				return (
					<Grid item xs={12} sm={4}>
					<Card 
					class="card work-card-width"
					onClick={()=>{this.handleClickOpen(data.title,data.sub_title,data.cover_image,data.content,data.date,data.images)}}>
					<CardMedia
					class="card-media"
					component='img'
					height='300'
					image='https://i.ibb.co/d2qnXbP/Whats-App-Image-2020-06-16-at-10-22-05-AM.jpg'
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
			<Box id="work">
			<Typography gutterBottom variant="h5" display="block" class="section">
			OUR WORK
			</Typography><br/>
			<Grid container spacing={9}>
			{this.state.our_works_visual}
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

			<Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          scroll="body"
          class="dialog-box"
        	>

          <DialogTitle class="dialog-title" id="dialog-title">
          {this.state.dialogTitle}


          </DialogTitle>


          <DialogContent class="dialog-content">
          <Box class="dialog-subtitle">{this.state.dialogSubtitle}</Box>
            <DialogContentText 
            class="dialog-content-text"
            id="alert-dialog-description">


            <img src={this.state.dialogCoverImage} class="dialog-image"/>
            
            {this.state.dialogContent}


            </DialogContentText>

          </DialogContent>
          <DialogActions class="dialog-actions">
            <Button onClick={this.handleClose} autoFocus class="dialog-close-button">
              Close
            </Button>
          </DialogActions>
        </Dialog>
			</ Box>
			)
		}
	}
