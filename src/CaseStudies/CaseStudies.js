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

			this.setState({
				name : this.state.appreciations[this.state.current_page].name,
				image : this.state.appreciations[this.state.current_page].image,
				description:this.state.appreciations[this.state.current_page].description,
				content:this.state.appreciations[this.state.current_page].content,
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
				description:this.state.appreciations[this.state.current_page].description,
				content:this.state.appreciations[this.state.current_page].content,
			});
	}

	previousPage = ()=>{
		this.setState({
			current_page : (this.state.current_page+this.state.limit-1)%this.state.limit
		})
			this.setState({
				name : this.state.appreciations[this.state.current_page].name,
				image : this.state.appreciations[this.state.current_page].image,
				description:this.state.appreciations[this.state.current_page].description,
				content:this.state.appreciations[this.state.current_page].content,
			});
	}

	updatePage = (page) => {
		this.setState({
			current_page : page,
		})
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
			<Box id="testimonials">
			
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
			<Box class="case-page-nav">
			<IconButton onClick={this.prevPage} class="case-back"><ArrowBack/></IconButton>
			<Pagination
			class="case-nav"
			 count={this.state.limit}
			  page={this.state.current_page}
			   onChange={(e,p) => {this.updatePage(p-1)}} 
			   variant="outlined" 
			   shape="rounded" 
			   hideNextButton={true}
			   hidePrevButton={true}
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
            {this.state.name}<br/>
            {this.state.description}<br/>
            {this.state.content}<br/>

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
}