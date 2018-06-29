import React, { Component } from "react";
import "../CSS/MoviePoster.css";

export default class MoviePoster extends Component {
    render() {
      const element = (
        <div className="col-md-3 col-sm-6">
          <div className="movie-cover-conatiner">
            <img
              className="movie-cover"
              src="http://image.tmdb.org/t/p/original/tvSlBzAdRE29bZe5yYWrJ2ds137.jpg"
              alt=""
            />
          </div>
        </div>
      );
      return element;
    }
  }