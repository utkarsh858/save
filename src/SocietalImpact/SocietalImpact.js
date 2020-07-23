import React,{Component} from 'react';
import{
	Grid,
	Box,
	Button,
	Typography,
} from '@material-ui/core';
import { Redirect } from "react-router-dom";

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
		 <img src={require("../images/impact-1.png")} class="si-tile" />
		 </Grid>
		 <Grid item xs={12} sm={3}>
		 <img src={require("../images/impact-2.png")} class="si-tile" />
		 </Grid>
		 <Grid item xs={12} sm={3}>
		 <img src={require("../images/impact-3.png")} class="si-tile" />
		 </Grid>
		 <Grid item xs={12} sm={3}>
		 <img src={require("../images/impact-4.png")} class="si-tile" />
		 </Grid>
		 <Grid item xs={12} sm={4}>
		 <img src={require("../images/impact-5.png")} class="si-tile" />
		 </Grid>
		 <Grid item xs={12} sm={4}>
		 <img src={require("../images/impact-6.png")} class="si-tile" />
		 </Grid>
		 <Grid item xs={12} sm={4}>
		 <img src={require("../images/impact-7.png")} class="si-tile" />
		 </Grid>
		 </Grid>
			<Button onClick={()=>{window.location.href = window.location.origin+"/about";}} class="si-but">Know Us More</Button>
		</Box>
	)
}
}