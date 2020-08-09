import React,{Component} from 'react';
import {Box,Grid,Typography} from '@material-ui/core';
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from 'mdbreact';
import api from '../api'	
import Member from "./Member/Member.js"
import './Team.css';


export default class Team extends Component{

	constructor(props){
		super(props)
		this.state = {
			our_team_visual :[],
			isLoading : false,
			open : false,
		}
	}

	componentDidMount = async() => {
		this.updatePage()
	}

	updatePage = async() => {
		this.setState({isLoading:true})

		await api.getOurTeam(1,50).then(our_team => {

			this.setState({
				isLoading:false,
				our_team_visual : our_team.data.map((data,index)=>{
					return(

						<Member data={data} index={index} />
					)
				})
			})
		})
	}

	render(){
		return(
			<Box id="team" class="document">
			    <MDBNavbar light expand="md" className="menu">
    <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse4" isOpen={this.state.isOpen} navbar>
                     <MDBNavbarNav right>

            <MDBNavItem>
              <MDBNavLink className="menu-item" to="/"><b>Home</b></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="menu-item" to="/activities"><b>Activities</b></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="menu-item" to="/team"><b>Team</b></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="menu-item" to="/impact"><b>Impact</b></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="menu-item" to="/contact"><b>Contact Us</b></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="menu-item right-0" to="/donate"><b>&nbsp;&nbsp;&nbsp;&nbsp;Donate&nbsp;&nbsp;&nbsp;&nbsp;</b></MDBNavLink>
            </MDBNavItem>
             </MDBNavbarNav>
     </MDBCollapse>
</MDBNavbar>
			<Typography gutterBottom variant="h5" display="block" class="section">
			MEET OUR TEAM
			</Typography>
			<br/>
			<Grid container className="bg">
			{this.state.our_team_visual}
			</Grid>
			</Box>
			);
	}	
}