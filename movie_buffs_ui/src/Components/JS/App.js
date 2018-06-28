import React, { Component } from "react";
import "../CSS/App.css";
import Home from "./Home.js";

export default class App extends Component {
  render() {
    const element = (
      <div>
        <Home />
      </div>
    );
    return element;
  }
}
