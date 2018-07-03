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

  componentWillMount() {
    upcomingMovies()
    .then((upcomingMovies) => {
      this.setState({upcomingMovies: Object.values(upcomingMovies)})
    })
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
                    <MovieGrid movies={(this.state.upcomingMovies.length) ? (this.state.upcomingMovies.splice(0, 4)) : []} />
                </div>
                <div className="carousel-item custom-carousel-item">
                    <MovieGrid movies={(this.state.upcomingMovies.length) ? (this.state.upcomingMovies.splice(0, 4)) : []} />
                </div>
                <div className="carousel-item custom-carousel-item">
                    <MovieGrid movies={(this.state.upcomingMovies.length) ? (this.state.upcomingMovies.splice(0, 4)) : []} />
                </div>
            </div>
      {/* <a
      className="arrow carousel-control-prev"
      href="#demo"
      data-slide="prev"
      >
      <span className="carousel-control-prev-icon effect" />
      </a>
      <a
      className="arrow carousel-control-next"
      href="#demo"
      data-slide="next"
      >
      <span className="carousel-control-next-icon effect" />
      </a> */}
      </div>
      );
    return element;
}
}

export default Carousel
