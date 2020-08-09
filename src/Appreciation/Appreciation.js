import React,{Component} from 'react';
import {Box,Card,Typography
} from '@material-ui/core';
import {FormatQuoteRounded} from '@material-ui/icons'
import ReactPaginate from 'react-paginate';
import './Appreciation.css';
import api from "../api"

class KnowMore extends Component{
	render(){
		console.log(this.props.link);
		if(this.props.link!=""){
			return(
				<span>Click <a target="_blank" href={this.props.link}>here</a> to read the full appreciation.</span>
			)
		}else return( <span></span>);
	}
}

export default class Appreciation extends Component{
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
			link:""
		}
	}
	componentDidMount = async()=>{
		this.setState({isLoading:true})
		await api.getAppreciations(1,20).then(appreciation_list => {
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
			link:this.state.appreciations[this.state.current_page].link,
		});
	}
	
	render(){

		return(
			<Box id="appreciation">
			
			<Typography gutterBottom variant="h5" display="block" class="section">
			APPRECIATION
			</Typography>




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
			{this.state.description}<br/><br/>
			<br/>
			<KnowMore link={this.state.link}/>
			</Typography>

			</Box>
			</Card>
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