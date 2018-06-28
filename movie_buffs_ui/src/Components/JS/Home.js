import React, { Component } from "react";
import "../CSS/Header.css";
import Header from "./Header.js"
import Body from "./Body.js"

export default class Home extends Component {
  render() {
    const element = (
      <div>
        <Header />
        <Body />
      </div>
    );
    return element;
  }
}

