import React, { Component } from "react";
import "../CSS/Carousel.css";
import { upcomingMovies } from "../../MoviesBuffsApi.js"
import MovieGrid from "./MovieGrid";

class Carousel extends Component {

  constructor() {
    super()
    this.state = {
      upcomingMovies: []
    }
  }

  render() {
    const element = (
        <div id="demo" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators custom-carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active" />
                <li data-target="#demo" data-slide-to="1" />
                <li data-target="#demo" data-slide-to="2" />
            </ul>
            <div className="carousel-inner carasole-width">
                <div className="carousel-item active custom-carousel-item">
                    <MovieGrid movies={this.props.upcomingMovies} />
                </div>
                <div className="carousel-item custom-carousel-item">
                    <MovieGrid movies={this.props.upcomingMovies} />
                </div>
                <div className="carousel-item custom-carousel-item">
                    <MovieGrid movies={this.props.upcomingMovies} />
                </div>
            </div>
      </div>
      );
    return element;
}
}

export default Carousel
