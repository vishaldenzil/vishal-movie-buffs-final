import React, { Component } from "react";
import "../CSS/Body.css";
import { recommendedMovies, upcomingMovies } from "../../MoviesBuffsApi.js";
import "../CSS/body-responsive.css";
import Carousel from "./Carousel.js";
import MovieGrid from "./MovieGrid.js";

class Body extends Component {
  constructor() {
    super();
    this.state = {
      recommendedMovies: [],
      upcomingMovies: []
    };
  }

  componentDidMount() {
    Promise.all([recommendedMovies(JSON.parse(localStorage.sessionDetails).localId), upcomingMovies()])
    .then((movies) => {
      console.log(movies[0], movies[1])
      this.setState({
        recommendedMovies: Object.values(movies[0]),
        upcomingMovies: Object.values(movies[1])
      })
    });
  }

  render() {
    return (
      <div className="main-container">
        <div className="container-fluid dark-bg hide">
          <div className="container dark-bg">
            <Carousel upcomingMovies={this.state.upcomingMovies} />
          </div>
        </div>
          <div className="container-fluid light-bg">
            <div className="text-container">
              <h3 className="recomended-text">Recommended Movies</h3>
            </div>
            <div className="container size">
              <MovieGrid movies={this.state.recommendedMovies} />
            </div>
          </div>
        </div>
    );
  }
}

export default Body;
