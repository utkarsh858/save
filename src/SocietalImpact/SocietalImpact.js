import React,{Component} from 'react';
import{
	Grid,
	Box,
	Button
} from '@material-ui/core';

import './SocietalImpact.css'
export default class SocietalImpact extends Component{
render(){
	return(
		<Box id="impact">
		<Box class="si-text">
		We together can become educating partners of 
		Educational bodies, government agencies etc. to cater and
		fulfill the need of Creating Awareness against drug abuse,
		 alcoholism, tobacco, usage etc.
		 </Box>
		 <Grid container justify="space-between" spacing={8}>
		 <Grid item xs={12} sm={3}>
		 <img src={require("../images/impact-1.png")}alt="impact"  class="si-tile" />
		 </Grid>
		 <Grid item xs={12} sm={3}>
		 <img src={require("../images/impact-2.png")} alt="impact" class="si-tile" />
		 </Grid>
		 <Grid item xs={12} sm={3}>
		 <img src={require("../images/impact-3.png")} alt="impact" class="si-tile" />
		 </Grid>
		 <Grid item xs={12} sm={3}>
		 <img src={require("../images/impact-4.png")} alt="impact" class="si-tile" />
		 </Grid>
		 <Grid item xs={12} sm={4}>
		 <img src={require("../images/impact-5.png")} alt="impact" class="si-tile" />
		 </Grid>
		 <Grid item xs={12} sm={4}>
		 <img src={require("../images/impact-6.png")} alt="impact" class="si-tile" />
		 </Grid>
		 <Grid item xs={12} sm={4}>
		 <img src={require("../images/impact-7.png")} alt="impact" class="si-tile" />
		 </Grid>
		 </Grid>
		</Box>
	)
}
}