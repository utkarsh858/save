import React,{Component} from 'react';
import {Button,
Box,Dialog} from '@material-ui/core';


export default class DonateOneTime extends Component{

	constructor(props){
		super(props);
		this.state = {
		}
	}

	render(){
		return(
			<Box >
<center class="don-bg"> 

			Please choose your preferred donation option<br/>
			<br/><br/><br/>
			<Button class="don-but" onClick={()=>{window.location.href="https://app.lotuspay.com/merchant/plan/AL00178PHGV3LY"}}>&#8377;500 per month</Button><br/>
			<Button class="don-but" onClick={()=>{window.location.href="https://app.lotuspay.com/merchant/plan/AL0064MHXXAKYB"}}>&#8377;1,000 per month</Button><br/>
			<Button class="don-but" onClick={()=>{window.location.href="https://app.lotuspay.com/merchant/plan/AL0060VJRI2HTG"}}>&#8377;2,000 per month</Button><br/>
			<Button class="don-but" onClick={()=>{window.location.href="https://app.lotuspay.com/merchant/plan/AL0064VS28SNUN"}}>&#8377;3,000 per month</Button><br/>
			<Button class="don-but" onClick={()=>{window.location.href="https://app.lotuspay.com/merchant/plan/AL0031UQEKT1HR"}}>&#8377;5,000 per month</Button><br/>
			<Button class="don-but" onClick={()=>{window.location.href="https://app.lotuspay.com/merchant/plan/AL0031KQFSWRYU"}}>&#8377;10,000 per month</Button><br/>
			</center>
			</Box>
		)
	}
}