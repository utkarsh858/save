import React,{Component} from 'react';
import GridGallery from 'react-grid-gallery';
import {Box
} from '@material-ui/core';
import "./Article.css"

export default class Article extends Component{
	render(){
    var title = window.localStorage.getItem('title');
    var sub_title = window.localStorage.getItem('sub_title');
    var cover_image = window.localStorage.getItem('cover_image');
    var content = window.localStorage.getItem('content');
var new_content = content.split ("/n").map ((item, i) => {return(<p key={i}>{item}</p>)})

    var date = JSON.parse(window.localStorage.getItem('date'));
    var images = JSON.parse(window.localStorage.getItem('images'));

		return(
			<React.Fragment>
			<Box class="dialog-title">
			{title}

			<Box class="dialog-date">
			{date.day+"/"+date.month+"/"+date.year}
			</Box>
			</Box>
			<Box class="dialog-content">
			<Box class="dialog-subtitle">
			{sub_title}
			</Box>
			<Box class="dialog-content-text">
            <img src={cover_image}alt="" class="dialog-image"/>
            {new_content}
			</Box>
			<GridGallery images={images}/>

			</Box>


			</React.Fragment>
		)
	}
}