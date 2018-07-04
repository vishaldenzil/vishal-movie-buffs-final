import React, { Component } from "react";
import "../CSS/Logout.css";
import { logout } from "../../MoviesBuffsApi.js";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

class Logout extends Component {
  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
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
     <div>
      <i className="fas fa-user-tie logout-btn " id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <div> 
                <NavLink className="drop-down" to="/dashboard">Dashboard</NavLink>
              </div>
              <div><hr /></div>
              <div> 
                <NavLink className="drop-down" to="/logout" onClick={this.handleLogout}>Logout</NavLink>
              </div>
      </div>
    </div>
    );
    return element;
  }
}

export default withRouter(Logout);
