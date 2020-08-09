import React,{Component} from 'react';
import {
	Box,
	Typography,
} from '@material-ui/core';
import "./Vision.css"

export default class Vision extends Component {

	render(){
	return(
<Box id="vision">		

<Typography gutterBottom variant="h5" display="block" class="section">
			VISION
			</Typography><br/>
<Box class="vision-text">
To develop a team of genuine intellectuals and 
transformational leaders who can assertively guide
 the generations to come.
 </Box>
</Box>
	)
}
}