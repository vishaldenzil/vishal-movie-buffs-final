import React, { Component } from "react";
import "../CSS/Header.css";
import Header from "./Header.js"
import Body from "./Body.js"

export default class Home extends Component {
  render() {
    const element = (
      <div>
        <Header components={{search: true, logout: true, browseMovies: true}}/>
        <Body />
      </div>
    );
    return element;
  }
}

