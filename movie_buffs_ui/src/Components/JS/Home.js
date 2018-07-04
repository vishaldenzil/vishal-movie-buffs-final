import React, { Component } from "react";
import "../CSS/Header.css";
import {Redirect} from 'react-router-dom'
import Header from "./Header.js"
import Body from "./Body.js"

export default class Home extends Component {
  render() {

  	if(!localStorage.sessionDetails) {
  		return <Redirect to="/" />
  	}

    const element = (
      <div>
        <Header components={{search: true, logout: true, browseMovies: true}}/>
        <Body />
      </div>
    );
    return element;
  }
}

