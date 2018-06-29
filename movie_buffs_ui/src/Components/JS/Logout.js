import React, { Component } from "react";
import "../CSS/Logout.css";

export default class Logout extends Component {
  render() {
    const elemant = (
      <button type="button" className="logout-btn">
        Logout
      </button>
    );
    return elemant;
  }
}
