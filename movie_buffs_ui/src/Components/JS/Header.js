import React, { Component } from "react";
import logo from "../ICONS/icon.png";
import "../CSS/Header.css";
import "../CSS/header-responsive.css";
import { NavLink } from "react-router-dom";
import Logout from "./Logout.js";

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            components: []
        };
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
                            <a href="#">Dashboard</a>
                            <a href="#">User Profile</a>
                            <a href="#">Logout</a>
                        </div>

                        </div>
                </NavLink>
                    <NavLink to='#' className="nav-link"> |</NavLink>
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