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
        const element = <nav className="navbar navbar-dark  bg-dark">
                            <NavLink to="/Home">
                                <img src={logo} className="App-logo" alt="logo" />
                                <span className="Header-text">MovieBuffs</span>
                            </NavLink>
                            <ul className="navbar-nav nav-float">
                                <li className="nav-item list-inline-item">
                                    <NavLink className="nav-link" to="/search">Browse movies</NavLink>
                                </li>
                                <li className="nav-item list-inline-item pop">
                                    <div class="dropdown">
                                        <NavLink to='#' class="nav-link no-btn dropdown-toggle" 
                                            data-toggle="dropdown">
                                            <span className='nav-text'>Hello User</span>
                                            <span class="caret"></span>
                                        </NavLink>
                                        <div>
                                            <ul class="dropdown-menu">
                                                <li><a href="#">HTML</a></li>
                                                <li><a href="#">CSS</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>
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