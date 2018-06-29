import React, { Component } from "react";
import "../CSS/MovieGrid.css";
import MoviePoster from "./MoviePoster.js";

class MovieGrid extends Component {
  render() {
    const element = (
      <div className="movie-shelf-container">
        <div className="row">
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
        </div>
      </div>
    );
    return element;
  }
}

export default MovieGrid;
