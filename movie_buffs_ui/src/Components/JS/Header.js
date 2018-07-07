import React, { Component } from "react";
import logo from "../ICONS/icon.png";
import "../CSS/Header.css";
import "../CSS/header-responsive.css";
import { NavLink } from "react-router-dom";
import { logout } from "../../MoviesBuffsApi.js";

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            components: []
        };
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

    componentDidMount() {
        this.setState({
            components: this.props.components
        });
    }

    render() {
        const element = <div className="App-header">
            <NavLink to="/Home">
                <div className="container-for-logo">
                    <img src={logo} className="App-logo" alt="logo" />
                    <span className="Header-text">MovieBuffs</span>
                </div>
            </NavLink>
            <div className="header-nav-link header-containts-container">
                <NavLink to='#' className="nav-link hearder-containt-text" >
                    <div className="dropdown">
                        <span > Hello User
                            <i class="fas fa-caret-down drop-down-arrow"></i>
                        </span>
                        <div className="dropdown-content">
                            <NavLink to='/dashboard'>Dashboard</NavLink>
                            <NavLink to="#">User Profile</NavLink>
                            <NavLink to="#" onClick={this.handleLogout}>Logout</NavLink>
                        </div>

                        </div>
                </NavLink>
                    <span className="nav-link"> |</span>
                    <NavLink className="nav-link hearder-containt-text" to="/search">Browse movies   </NavLink>
            </div>
        </div>
            return element
        }
    }
    
    
    
    // const element = (
//   <div className="Search-container">
//   <header className="App-header">
//   <NavLink to="/Home">
//   <img src={logo} className="App-logo" alt="logo" />
//   <span className="Header-text">MovieBuffs</span>
//   </NavLink>


//   {this.props.components.logout ? <Logout /> : ""}
//   {this.props.components.browseMovies ? (
//     <NavLink to="/search" className="nav-link">
//     <i className="fas fa-search search-icon" />
//     <span className="movie-text"> MOVIES</span>
//     </NavLink>
//     ) : (
//     ""
//     )}
// {/*(this.props.components.Search) ? <Search /> : ''*/}


// </header>
// </div>
// );
// return element