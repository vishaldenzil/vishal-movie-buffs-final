import React, { Component } from "react";
import logo from "../ICONS/logo.svg";
import "../CSS/Header.css";
import Logout from "./Logout.js";
import Search from "./Search.js";

export default class Header extends Component {

  render() {
    const elemant = (
      <div className="Search-container">
        <header className="App-header av-blur-backdrop">
          <img src={logo} className="App-logo" alt="logo" />
          <span className="Header-text">MovieBuffs</span>
          <Logout />
          <Search />
        </header>
      </div>
    );
    return elemant;
  }
}
