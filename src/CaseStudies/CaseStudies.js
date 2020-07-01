import React,{Component} from 'react';
import {
	Box,Grid,Card,CardContent,CardMedia,IconButton,Typography,	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Button
} from '@material-ui/core';
import {Pagination} from '@material-ui/lab'; 
import {ArrowForward,ArrowBack,FormatQuoteRounded} from '@material-ui/icons'
import ReactPaginate from 'react-paginate';
import filler from "./filler.jpg";
import './CaseStudies.css';
import api from "../api"


export default class CaseStudies extends Component{
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
			content:"",

			open: false,
		}
	}
	componentDidMount = async()=>{
		this.setState({isLoading:true})
		await api.getCaseStudies(1,20).then(appreciation_list => {
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
				description:this.state.appreciations[this.state.current_page].description,
				content:this.state.appreciations[this.state.current_page].content,
			});
	}
	
	handleClickOpen = () => {
    this.setState({
    open: true,
    });
  	}

	handleClose = () => {
    this.setState({ open: false });
  	}

	render(){
		return(
			<Box id="casestudies">
			
			<Typography gutterBottom variant="h5" display="block" class="section">
			CASE STUDIES
			</Typography>



			<Grid container spacing={1}>

			
			
			<Grid item xs={12} sm={6}>
			<Card class="case-textbox" onClick={()=>{this.handleClickOpen()}}>
			<Box class="case-upper-part">




			<Typography variant="body1" gutterBottom class="case-quote">
			Meet
			</Typography>



			</Box>

			<Box class="case-lower-part">
			<Typography variant="body1" gutterBottom class="case-who">
			{this.state.name}<br/>

			</Typography>
			<Typography variant="body2" gutterBottom>
			{this.state.description}<br/>	
			</Typography>

			</Box>
			</Card>
			</Grid>
			<Grid item xs={12} sm={6} >
			<Card class="case-image-cont">
			<img src={filler} class="case-image"/>
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
            pageRangeDisplayed={5}
            onPageChange={(e) => { console.log(e); 		this.setState({
			current_page : e.selected,
		}); this.updatePage();}}

			containerClassName={"pagination"}
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
          Meet {this.state.name}


          </DialogTitle>


          <DialogContent class="dialog-content">
          <Box class="dialog-subtitle">{this.state.description}</Box>
            <DialogContentText 
            class="dialog-content-text"
            id="alert-dialog-description">


            <img src={this.state.image} class="dialog-image"/>
            
            {this.state.content}


            </DialogContentText>

          </DialogContent>
          <DialogActions class="dialog-actions">
            <Button onClick={this.handleClose} autoFocus class="dialog-close-button">
              Close
            </Button>
          </DialogActions>
        </Dialog>
			</Box>

			);
	}
}