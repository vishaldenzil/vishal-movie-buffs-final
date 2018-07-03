import React, { Component } from "react";
import "../CSS/Carousel.css";
import { upcomingMovies } from "../../MoviesBuffsApi.js"
import MovieGrid from "./MovieGrid";

class Carousel extends Component {

  constructor() {
    super()
    this.state = {
      upcomingMovies: [], call:0
    }
  }

  componentDidMount() {
    upcomingMovies()
    .then((upcomingMovies) => {
      this.setState({upcomingMovies: Object.values(upcomingMovies),call:1})
    });
  }


  render() {
    if(this.state.call === 0)
      this.componentDidMount();
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
      </div>
      );
    return element;
  }
}

export default Carousel
