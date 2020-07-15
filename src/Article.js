import React,{Component} from 'react';
import GridGallery from 'react-grid-gallery';
import {Box,
	Button,
	Link
} from '@material-ui/core';
import "./Article.css"

export default class Article extends Component{
	render(){
    var title = window.localStorage.getItem('title',title);
    var sub_title = window.localStorage.getItem('sub_title',sub_title);
    var cover_image = window.localStorage.getItem('cover_image',cover_image);
    var content = window.localStorage.getItem('content',content);
var new_content = content.split ("/n").map ((item, i) => {return(<p key={i}>{item}</p>)})

    var date = JSON.parse(window.localStorage.getItem('date',date));
    var images = JSON.parse(window.localStorage.getItem('images',JSON.stringify(images)));
    // console.log(typeof content)
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
            <img src={cover_image} class="dialog-image"/>
            {new_content}
			</Box>
			<GridGallery images={images}/>

			</Box>


			</React.Fragment>
		)
	}
}