import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { searchId } from "../../MoviesBuffsApi.js";
import "../CSS/MoviePoster.css";
import "../CSS/movieposter-responsive.css";
import {addUserMovie,getUserMovies } from "../../MoviesBuffsApi";

export default class MoviePoster extends Component {
  constructor() {
    super();
    this.state = {
      movie: {}
    };
      this.getMovieDashBoard = this.getMovieDashBoard.bind(this);
  }

  getMovieDashBoard(imdb)
  {
      let id=JSON.parse(localStorage.sessionDetails).localId
      addUserMovie(id,imdb).then(console.log(true));
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
                alt={this.state.movie.Title}
              />
              
            </div>
            </NavLink>
            <span className="middle">
              <h4>{this.state.movie.Title}</h4>
            </span>
          
              <i onClick={()=>this.getMovieDashBoard(this.state.movie.imdbID)} className="fas fa-star star-position" />     
        </div>
      </div>
    );
    return element;
  }
}
