import React,{Component} from 'react';
import {Button,
Box,
Grid,
TextField} from '@material-ui/core';

import "./Donate.css"
export default class Donate extends Component{
  componentDidMount(){
    document.title="SAVE";
  }
	render(){
		return(
			<Box id="donate">
			<Box class="don-intro">
			Your ₹1000 contribution can create a leader!
			</Box>
			<Box class="don-desc">
			Our financial records are audited annually <br/><br/>
			We know it’s important to you that your donation is being used effectively.<br/> It’s
important to us, too. That’s why we work hard to the highest grades available for
accountability and transparency.
			</Box>
			</Box>
		)
	}
}