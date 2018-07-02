import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { searchId } from "../../MoviesBuffsApi.js";
import "../CSS/MoviePoster.css";

export default class MoviePoster extends Component {
  constructor() {
    super();
    this.state = {
      movie: ""
    };
  }

  componentDidMount() {
    if (this.props.movie) {
      searchId(this.props.movie).then(movie => {
        if (movie.movie.Poster !== "N/A") {
          this.setState({
            movie: movie.movie
          });
        }
      });
    }
  }

  render() {
    const element = (
      <div className="col-md-3 col-sm-6">
        <div className="movie-cover-conatiner">
          <NavLink to={`/desc/${this.state.movie.imdbID}`}>
            <div className="border-div">
              <img
                className="movie-cover"
                src={this.state.movie.Poster && this.state.movie.Poster}
                alt=""
              />
            </div>
          </NavLink>
          <i className="fas fa-star star-position" />
          <span className="middle">
            {this.state.movie.imdbRating !== "N/A" ? (
              <h4>{this.state.movie.imdbRating}</h4>
            ) : (
              ""
            )}
            <h4>{this.state.movie.Title}</h4>
          </span>
        </div>
      </div>
    );
    return element;
  }
}
