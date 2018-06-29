import React, { Component } from "react";
import "../CSS/Search.css";

export default class Search extends Component {
  render() {
    const element = (
      <input
        className="quick-search-input"
        value="Quick Search"
        type="search"
      />
    );
    return element;
  }
}
