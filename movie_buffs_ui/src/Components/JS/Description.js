import React, { Component } from "react";
import "../CSS/Description.css";
import "../CSS/description-responsive.css";
import Iframe from "react-iframe";
import { searchId } from "../../MoviesBuffsApi";
import Header from "./Header.js";

export default class Description extends Component {
  constructor() {
    super();
    this.state = {
      Movies: {}
    };

    this.getMovie = this.getMovie.bind(this);
  }

  getMovie() {
    let id = this.props.match.params.id;
    searchId(id).then(movie => {
      console.log(movie.Actors);
      this.setState({ Movies: movie });
    });
  }

  componentDidMount() {
    this.getMovie();
  }
  render() {
    let data = this.state;
    return (
      <div>
        <Header
          components={{ logout: true, search: true, browseMovies: true }}
        />
        <div className="main-description-container">
          <div className="row-first">
            <div className="column-1">
              <img
                className="description-img"
                src={data.Movies.movie && data.Movies.movie.Poster}
              />
            </div>
            <div className="column-2">
              <div class="row-1">
                <h3 className="movie-name">
                  {data.Movies.movie && data.Movies.movie.Title}
                </h3>
                <div className="height-bw-name-year" />
                <h4 className="year">
                  {data.Movies.movie && data.Movies.movie.Year}
                </h4>

                <h6 className="movie-type">
                  {data.Movies.movie && data.Movies.movie.Genre}
                </h6>
              </div>
              <div className="height-bw-year-rating" />
              <div>
                {" "}
                <i class="fab fa-imdb imdb-icon-font" />
                <h4 className="rating-text">
                  &nbsp;&nbsp;&nbsp;
                  {data.Movies.movie && data.Movies.movie.imdbRating}{" "}
                </h4>
                &nbsp;&nbsp;&nbsp;
                <i class="fas fa-star imdb-star" />
              </div>
              <div>
                <div className="height-bw-rating-plot" />
                <h4 className="plot"> Plot </h4>
                <p className="movie-description-para">
                  {data.Movies.movie && data.Movies.movie.Plot}
                </p>
              </div>
            </div>
          </div>
          <div className="iframe-container">
            <div class="iframe">
              <Iframe
                url={data.Movies.movie && data.Movies.movie.trailer}
                width="100%"
                height="100%"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                frameborder="5px"
                allowFullScreen
                ng-show="showvideo"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
