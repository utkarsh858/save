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
	DialogTitle
} from '@material-ui/core';
import {Pagination} from '@material-ui/lab'; 
import {ArrowForward} from '@material-ui/icons'
import api from '../api'
import ReactPaginate from 'react-paginate';
import './Work.css'

export default class Work extends Component{
	constructor(props){
		super(props)
		this.state = {
			our_works_visual : [],
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

		await api.getOurWorksByPage(this.state.currentPage,this.state.perPage).then(our_works => {	
			this.setState({
				// our_works : our_works.data.data,
				isLoading: false,
				numOfPages : Math.ceil((our_works.data.data_length)/(this.state.perPage)),
				our_works_visual : our_works.data.data.map((data) => {
				return (
					<Grid item xs={12} sm={4}>
					<Card>
					<CardMedia
					image='filler.jpg'
					title="Paella dish"
					/>
					<CardContent>
					{data.title} <br />
					{data.content}
					</CardContent>
					<CardActions disableSpacing>
					<IconButton aria-label="add to favorites" onClick={()=>{this.handleClickOpen(data.title,data.content,'')}}>
					<ArrowForward />
					</IconButton>
					</ CardActions>
					</Card>
					</Grid>
					)
				})
			})
			// console.log(Math.ceil((our_works.data.data_length)/(this.perPage))
			// console.log(Math.ceil(our_works.data.data_length);
			// console.log(Math.ceil(this.perPage);
			
		})
		
	}



	render(){
		return (
			<Box id="work">
			<Typography gutterBottom variant="h5" component="h2">
			Work
			</Typography>
			<Grid container spacing={9}>
			{this.state.our_works_visual}
			</Grid>
			<br/>
			<ReactPaginate
			previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={this.state.numOfPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={(e) => { console.log(e); this.updatePage(e.selected+1)}}
			containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
            />

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
			</ Box>
			)
		}
	}