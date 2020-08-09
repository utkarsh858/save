import React,{Component} from 'react';
import {
	Box,
	Typography,
	Grid,

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
<Box class="obj-2">Train</Box>
<Box class="obj-3">the participants in a holistic way of life covering important aspects of physical, mental, emotional and spiritual wellness.</Box>

</Grid>
<Grid item xs={12} sm={4}>

<Box class="obj-1">To</Box>
<Box class="obj-2">Organize</Box>
<Box class="obj-3">Anti-Addiction Workshops to prevent the younger generation from  self-destructive habits.</Box>

</Grid>
<Grid item xs={12} sm={4}>

<Box class="obj-1">To</Box>
<Box class="obj-2">Equip</Box>
<Box class="obj-3">every student with necessary skill-sets that can aid in their academics and their career at large by organizing placement preparation programs, vocational training, life-style management and soft skills workshops.</Box>

</Grid>
<Grid item xs={12} sm={4}>

<Box class="obj-1">To</Box>
<Box class="obj-2">Organize</Box>
<Box class="obj-3">inter-school festivals for providing better cultural exposure and developing harmonious relationships amongst the younger generation of the society.</Box>

</Grid>
<Grid item xs={12} sm={4}>

<Box class="obj-1">To</Box>
<Box class="obj-2">Create and Develop</Box>
<Box class="obj-3">awareness about the values of life and their significance in the internal growth of students in schools, colleges and other such institutions.</Box>

</Grid>
<Grid item xs={12} sm={4}>

<Box class="obj-1">To</Box>
<Box class="obj-2">Distribute</Box>
<Box class="obj-3">free meals at all our centres and provide monetary aid for education of underprivileged students.</Box>

</Grid><Grid item xs={12} sm={4}>

<Box class="obj-1">To</Box>
<Box class="obj-2">Educate</Box>
<Box class="obj-3">everyone in the principles of yoga and organize pragmatic yoga workshops for a balanced lifestyle.</Box>

</Grid><Grid item xs={12} sm={4}>

<Box class="obj-1">To</Box>
<Box class="obj-2">Bring Attention</Box>
<Box class="obj-3">of the society at large to the burning issues of the human society such as protection of animals, to preserve ecological balance, rural development, organic farming, energy conservation, preservation of our native culture and promoting inter-faith harmony.</Box>

</Grid><Grid item xs={12} sm={4}>

<Box class="obj-1">To</Box>
<Box class="obj-2">Hold</Box>
<Box class="obj-3"> educational retreats, seminars, workshops and publish periodicals to support the above objectives.</Box>

</Grid>
</Grid>


</Box>
	)
}
}