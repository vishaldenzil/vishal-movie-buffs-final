import React, { Component } from "react";
import "../CSS/Body.css";
import { recommendedMovies } from "../../MoviesBuffsApi.js"
import "../CSS/body-responsive.css"
import Carousel from "./Carousel.js";
import MovieGrid from "./MovieGrid.js";

class Body extends Component {
  constructor() {
    super();
    this.state = {
      recommendedMovies: []
    };
  }

  componentDidMount() {
    recommendedMovies(JSON.parse(localStorage.sessionDetails).localId)
    .then((recommendedMovies) => {
      this.setState({recommendedMovies: Object.values(recommendedMovies)})
    });

  }

  render() {
    console.log(this.state.recommendedMovies, 'reco')
    return (
      <div className="main-container">
        <div className="container-fluid dark-bg hide">
          <div className="container dark-bg">
            <Carousel i={true}/>
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
