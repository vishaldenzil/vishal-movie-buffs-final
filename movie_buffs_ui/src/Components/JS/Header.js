import React, { Component } from "react";
import logo from "../ICONS/icon.png";
import "../CSS/Header.css";
import "../CSS/header-responsive.css";
import { NavLink } from "react-router-dom";
import { logout } from "../../MoviesBuffsApi.js";
import Logout from './Logout.js';

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
                            <NavLink to='/dashboard'>Dashboard</NavLink>
                            <NavLink to="#">User Profile</NavLink>
                            <Logout />
                        </div>
                    </div>
                </NavLink>
                    <span className="nav-link"> | </span>
                    <NavLink className="nav-link hearder-containt-text" to="/search">Browse movies   </NavLink>
            </div>
        </div>
            return element
        }
    }
