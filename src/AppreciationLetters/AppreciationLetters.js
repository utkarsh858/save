import React,{Component} from 'react';
import {Box,Grid,Card,CardContent,CardMedia,IconButton,Typography
} from '@material-ui/core';
import {Pagination} from '@material-ui/lab'; 
import {ArrowForward,ArrowBack,FormatQuoteRounded} from '@material-ui/icons'
import ReactPaginate from 'react-paginate';
import './AppreciationLetters.css';
import api from "../api"


export default class AppreciationLetters extends Component{
	constructor(props){
		super(props)
		this.state = {
			appreciations : [],
			isLoading : false,
			current_page: 0,
			limit : 1,
			name:"",
			description:"",
			image:"",
		}
	}
	componentDidMount = async()=>{
		this.setState({isLoading:true})
		await api.getAppreciationLetters(1,20).then(appreciation_list => {
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
		});
	}
	
	render(){
		return(
			<Box id="letters">
			
			<Typography gutterBottom variant="h5" display="block" class="section">
			APPRECIATION LETTERS
			</Typography>

			<center>
			<img src={this.state.image} class="al-img" />
			<Box class="al-name">
			{this.state.name}
			</Box>
			<Box class="al-desc">
			{this.state.description}
			</Box>
			</center>
			
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