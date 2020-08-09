import React,{Component} from 'react';
import {Button,
Box,Dialog} from '@material-ui/core';

import "./Donate.css"
export default class Donate extends Component{

	constructor(props){
		super(props);
		this.state = {
			dialog_one_time : false,
			dialog_monthly : false,
		}
	}

  componentDidMount(){
    document.title="SAVE";
  }
	render(){
		return(
			<Box id="donate">
			<center>
			<img src={require('../images/birds.png')} alt="" class="don-img"/><br/>
			<Box class="don-intro">
			LETS SPREAD THE VALUES TOGETHER
			</Box>
			<Box class="don-desc">
			Our financial records are audited annually <br/><br/>
<p>
Due to the happiness and response that we received from the beneficiaries, we long to spread our arms to reach out to more people. To achieve this goal, we need grants from you or your esteemed organisation to help us in our mission to reach out to a large section of young minds within next few years.</p>
<p>
This year, we wish to take a step further to invite you to take even more ownership of building SAVE as a movement.
</p>
<p>
Given the crossroads of multifold crises that this generation finds itself today - we need to create support infrastructure for the motivated ones to navigate towards service rather than finding their passion clipped.
</p>

			</Box>
			<Box>
			<a class="Link" href="/donate/donate-one-time"><Button class="don-but1 don-but" >Become a monthly contributor</Button></a>
			<a class="Link" href='https://www.payumoney.com/paybypayumoney/#/D13D1345E3365C3FEBB8632C3D484173'><Button class="don-but2 don-but">Make a one-time contribution</Button></a>
			</Box>
			</center>
			
			
			<center>
			<p class="don-desc">"Investing in shares give returns to the owner. Investing in people give returns to the whole world"</p>
			<p class="don-desc">The financial capital will be invested into carving out learning journeys for young dreamers into principle-centered leaders, social entrepreneurs and volunteers. The major cost is incurred into facilitation, alumni support, travel,  food, accommodation and other logistics. </p>
			<p class="don-desc">For more details, mail: <a href="mailto:care.save.values@gmail.com">care.save.values@gmail.com</a></p>
			</center>
			</Box>
		)
	}
}