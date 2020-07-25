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
			Your contribution can unlock potenials!
			</Box>
			<Box class="don-desc">
			Our financial records are audited annually <br/><br/>
			We know it’s important to you that your donation is being used effectively.<br/> It’s
important to us, too. That’s why we work hard to the highest grades available for
accountability and transparency.
			</Box>
			<Box>
			<Button class="don-but1 don-but" onClick={()=>{this.setState({dialog_monthly:true})}}>Become a monthly contributor</Button>
			<Button class="don-but2 don-but" onClick={()=>{this.setState({dialog_one_time:true})}}>Make a one-time contribution</Button>
			</Box>
			</center>
			<Dialog class="don-dialog" onClose={()=>{this.setState({dialog_monthly:false})}} aria-labelledby="dialog_monthly" open={this.state.dialog_monthly}>
			Please choose your preferred donation option<br/>
			<Button class="don-but" onClick={()=>{window.location.href="https://app.lotuspay.com/merchant/plan/AL00178PHGV3LY"}}>&#8377;500 per month</Button><br/>
			<Button class="don-but" onClick={()=>{window.location.href="https://app.lotuspay.com/merchant/plan/AL0064MHXXAKYB"}}>&#8377;1,000 per month</Button><br/>
			<Button class="don-but" onClick={()=>{window.location.href="https://app.lotuspay.com/merchant/plan/AL0060VJRI2HTG"}}>&#8377;2,000 per month</Button><br/>
			<Button class="don-but" onClick={()=>{window.location.href="https://app.lotuspay.com/merchant/plan/AL0064VS28SNUN"}}>&#8377;3,000 per month</Button><br/>
			<Button class="don-but" onClick={()=>{window.location.href="https://app.lotuspay.com/merchant/plan/AL0031UQEKT1HR"}}>&#8377;5,000 per month</Button><br/>
			<Button class="don-but" onClick={()=>{window.location.href="https://app.lotuspay.com/merchant/plan/AL0031KQFSWRYU"}}>&#8377;10,000 per month</Button><br/>
			</Dialog>
			<Dialog class="don-dialog" onClose={()=>{this.setState({dialog_one_time:false})}} aria-labelledby="dialog_one_time" open={this.state.dialog_one_time}>
			One-time Donation<br/>
			<br/>
			<div class="don-dia-title">PayU Portal</div>
<div class='pm-button'><a href='https://www.payumoney.com/paybypayumoney/#/D13D1345E3365C3FEBB8632C3D484173'><img src='https://www.payumoney.com/media/images/payby_payumoney/new_buttons/22.png' /></a></div>


			</Dialog>
			</Box>
		)
	}
}