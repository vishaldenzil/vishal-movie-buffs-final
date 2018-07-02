import React, { Component } from "react";
import "../CSS/Logout.css";
import { logout } from "../../MoviesBuffsApi.js";
import { withRouter } from 'react-router-dom'

class Logout extends Component {

	constructor() {
		super()
		this.handleLogout = this.handleLogout.bind(this)
	}

	handleLogout() {
    	logout(JSON.parse(localStorage.sessionDetails).refreshToken)
      	.then(() => {
        	this.props.history.push("/");
        	localStorage.removeItem("sessionDetails");
      	})
      	.catch(error => {
        	console.log(error);
      	});
  	}

  	render() {
    	const element = (
      		<button type="button" className="logout-btn" onClick={this.handleLogout}>
        		Logout
      		</button>
    	);
    	return element;
  	}
}


export default withRouter(Logout)