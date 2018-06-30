import React, { Component } from "react";
import "../CSS/Logout.css";

export default class Logout extends Component {
  render() {
    const element = (
      <button type="button" className="logout-btn">
        Logout
      </button>
    );
    return element;
  }
}
