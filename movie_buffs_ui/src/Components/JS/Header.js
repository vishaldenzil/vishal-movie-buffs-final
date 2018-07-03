import React, { Component } from "react";
import logo from "../ICONS/logo.svg";
import "../CSS/Header.css";
import "../CSS/header-responsive.css";
import { NavLink } from "react-router-dom";
import Logout from "./Logout.js";
import Search from "./Search.js";

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
    const element = (
      <div className="Search-container">
        <header className="App-header av-blur-backdrop">
          <NavLink to="/Home">
            <img src={logo} className="App-logo" alt="logo" />
            <span className="Header-text">MovieBuffs</span>
          </NavLink>

          
          {this.props.components.logout ? <Logout /> : ""}
          {this.props.components.browseMovies ? (
            <NavLink to="/search" className="nav-link">
              <i className="fas fa-search search-icon" />
              <span className="movie-text"> MOVIES</span>
            </NavLink>
          ) : (
            ""
          )}
          {/*(this.props.components.Search) ? <Search /> : ''*/}
         
          
        </header>
      </div>
    );
    return element;
  }
}
