import React, { Component } from "react";
import "../CSS/Description.css";
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
            <div className="column-1 desc-img-top-margin">
              <img className="description-img" src={data.Movies.movie && data.Movies.movie.Poster} />
            </div>
            <div className="column-2 desc-img-top-margin">
              <div class="row-1">
                <h3>{data.Movies.movie && data.Movies.movie.Title}</h3>
                <h4>{data.Movies.movie && data.Movies.movie.Year}</h4>
                <h6>{data.Movies.movie && data.Movies.movie.Genre}</h6>
              </div>
              <div>
                <h6>
                  {" "}
                  Ratings : {data.Movies.movie && data.Movies.movie.imdbRating}
                </h6>
              </div>
              <div>
                <h4> Plot </h4>
                <p>{data.Movies.movie && data.Movies.movie.Plot}</p>
              </div>
            </div>
          </div>

          <div class="iframe">
            <Iframe
              url={data.Movies.movie && data.Movies.movie.trailer}
              width="100%"
              height="500px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
              frameborder="20px"
              allowFullScreen
              ng-show="showvideo"
            />
          </div>
        </div>
      </div>
    );
  }
}
