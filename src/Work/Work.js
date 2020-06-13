import React,{Component} from 'react';
import {Box,Grid,Card,CardContent,CardActions,CardMedia,IconButton,Typography} from '@material-ui/core';
import {Pagination} from '@material-ui/lab'; 
import {ArrowForward} from '@material-ui/icons'


export default class Work extends Component{
	render(){
		return (
			<Box id="work">
			 <Typography gutterBottom variant="h5" component="h2">
            Work
          </Typography>
			<Grid container spacing={9}>
			<Grid item xs={12} sm={4}>
				<Card>
				   <CardMedia
 					 image='filler.jpg'
        		title="Paella dish"
      			/>
				<CardContent>
					SAVE workers fighting against Corona
				</CardContent>
				<CardActions disableSpacing>
        		<IconButton aria-label="add to favorites">
          			<ArrowForward />
        		</IconButton>
        		</ CardActions>
				</Card>
			</Grid>						<Grid item xs={12} sm={4}>
				<Card>
				   <CardMedia
 					 image='filler.jpg'
        		title="Paella dish"
      			/>
				<CardContent>
					SAVE workers fighting against Corona
				</CardContent>
				<CardActions disableSpacing>
        		<IconButton aria-label="add to favorites">
          			<ArrowForward />
        		</IconButton>
        		</ CardActions>
				</Card>
			</Grid>						<Grid item xs={12} sm={4}>
				<Card>
				   <CardMedia
 					 image='filler.jpg'
        		title="Paella dish"
      			/>
				<CardContent>
					SAVE workers fighting against Corona
				</CardContent>
				<CardActions disableSpacing>
        		<IconButton aria-label="add to favorites">
          			<ArrowForward />
        		</IconButton>
        		</ CardActions>
				</Card>
			</Grid>						<Grid item xs={12} sm={4}>
				<Card>
				   <CardMedia
 					 image='filler.jpg'
        		title="Paella dish"
      			/>
				<CardContent>
					SAVE workers fighting against Corona
				</CardContent>
				<CardActions disableSpacing>
        		<IconButton aria-label="add to favorites">
          			<ArrowForward />
        		</IconButton>
        		</ CardActions>
				</Card>
			</Grid>						<Grid item xs={12} sm={4}>
				<Card>
				   <CardMedia
 					 image='filler.jpg'
        		title="Paella dish"
      			/>
				<CardContent>
					SAVE workers fighting against Corona
				</CardContent>
				<CardActions disableSpacing>
        		<IconButton aria-label="add to favorites">
          			<ArrowForward />
        		</IconButton>
        		</ CardActions>
				</Card>
			</Grid>						<Grid item xs={12} sm={4}>
				<Card>
				   <CardMedia
 					 image='filler.jpg'
        		title="Paella dish"
      			/>
				<CardContent>
					SAVE workers fighting against Corona
				</CardContent>
				<CardActions disableSpacing>
        		<IconButton aria-label="add to favorites">
          			<ArrowForward />
        		</IconButton>
        		</ CardActions>
				</Card>
			</Grid>		
			</Grid>
			<br/>
			<Pagination count={10} />
			</Box>
		)
	}
}