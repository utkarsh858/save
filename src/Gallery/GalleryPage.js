import React,{Component} from 'react';
import {Box,Typography,
} from '@material-ui/core';
import GridGallery from 'react-grid-gallery';
import api from "../api"

import './GalleryPage.css';

export default class GalleryPage extends Component{
	constructor(props){
		super(props)
		this.state = {
			images : [],
			isLoading : false,
		}
	}
	componentDidMount = async()=>{
	document.title="SAVE - Gallery"


		this.setState({isLoading:true})
		await api.getGalleryImages(1,20).then(images_list => {
			this.setState({
				isLoading:false,
				images : images_list.data,
			})	

		})
	}

	render(){
		return(
			<Box id="gallery">
			<Typography gutterBottom variant="h5" display="block" class="section">
			GALLERY
			</Typography>
			<GridGallery class="dialog-gallery" images={this.state.images}/>
			</Box>
		)
	}
}