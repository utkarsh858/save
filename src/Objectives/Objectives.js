import React,{Component} from 'react';
import {
	Box,
	Typography,
	Grid,
	Card,
} from '@material-ui/core';

import "./Objectives.css"
export default class Objectives extends Component {
	
render(){
	return(
<Box id="objectives">

<Typography gutterBottom variant="h5" display="block" class="section">
			OBJECTIVES
			</Typography><br/>

<Grid container spacing={9} justify="center">
<Grid item xs={12} sm={4}>

<Box class="obj-1">To</Box>
<Box class="obj-2">Guide</Box>
<Box class="obj-3">the student community towards achieving their personal, interpersonal and spiritual needs.</Box>

</Grid>
<Grid item xs={12} sm={4}>

<Box class="obj-1">To</Box>
<Box class="obj-2">Train</Box>
<Box class="obj-3">them to safeguard themselves from self-destructive habits, unhealthy relationships and unstructured life styles.</Box>

</Grid>
<Grid item xs={12} sm={4}>

<Box class="obj-1">To</Box>
<Box class="obj-2">Educate</Box>
<Box class="obj-3">them in the values of life and promote their wholesome growth.</Box>

</Grid>
<Grid item xs={12} sm={4}>

<Box class="obj-1">To</Box>
<Box class="obj-2">Help</Box>
<Box class="obj-3">people build long lasting loving relationships based on higher principles in life.</Box>

</Grid>
<Grid item xs={12} sm={4}>

<Box class="obj-1">To</Box>
<Box class="obj-2">Collaborate</Box>
<Box class="obj-3">and dutifully serve our peers and the society at large.</Box>

</Grid>
</Grid>


</Box>
	)
}
}