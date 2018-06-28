import React, { Component } from "react";
import "../CSS/Body.css";
import Carousel from "./Carousel.js";
import MovieShelf from "./MovieShelf.js";

class Body extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="container-fluid dark-bg">
          <div className="container dark-bg">
            <Carousel />
          </div>
        </div>
        <div className="container-fluid light-bg">
          <div className="text-container">
            <h3 className="recomended-text">Recomended Movies</h3>
          </div>
          <div className="container size">
            <MovieShelf />
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
