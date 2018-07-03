import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { searchId } from "../../MoviesBuffsApi.js";
import "../CSS/MoviePoster.css";
import "../CSS/movieposter-responsive.css";

export default class MoviePoster extends Component {
  constructor() {
    super();
    this.state = {
      movie: {}
    };
  }

  componentDidMount() {
    if(this.props.movie) {
      this.setState({
        movie: this.props.movie
      })
    }
  }

  render() {
    const element = (
      <div className="col-md-3 col-sm-6 poster-size">
        <div className="movie-cover-conatiner">
          <NavLink to={`/desc/${this.state.movie.imdbID}`}>
            <div className="border-div">
              <img
                className="movie-cover"
                src={this.state.movie.Poster && this.state.movie.Poster}
                alt=""
              />
          
            <i className="fas fa-star star-position" ></i>
            <span className="middle">
              <h4>{this.state.movie.Title}</h4>
            </span>
            </div>
          </NavLink>
        </div>
      </div>
    );
    return element;
  }
}
