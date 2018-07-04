import React, { Component } from "react";
import "../CSS/MovieGrid.css";
import "../CSS/SearchPage.css";
import "../CSS/searchpage-responsive.css"
import { searchTitle } from "../../MoviesBuffsApi";
import MoviePoster from "./MoviePoster";
import Header from "./Header";
import MovieGrid from "./MovieGrid";
import { DebounceInput } from "react-debounce-input";
import {Redirect} from 'react-router-dom';

export default class SearchItem extends Component {
  constructor() {
    super();
    this.state = {
      MovieSearch: []
    };
    this.getMovieSearch = this.getMovieSearch.bind(this);
  }

  getMovieSearch(event) {
    let title = event.target.value;
    if (title.length == 0) {
      this.setState({ MovieSearch: [] });
    } else {
      searchTitle(title).then(movie => {
        this.setState({ MovieSearch: movie });
      });
    }
  }

  render() {
    if(!localStorage.sessionDetails) {
      return <Redirect to="/" />
    }
    let MovieItems = [];
    return (
      <div>
        <Header
          components={{ logout: true, search: false, browseMovies: false }}
        />
        <div className="main-container-for-search-page">
          {/* <div className="container-fluid light-bg"> */}
            {/* <div className="container size"> */}
              <div className="input-group search-postion">
                <span className="input-group-addon">
                <i class="fas fa-search"></i>
                </span>
                <DebounceInput
                  className="form-control search-input"
                  minLength={2}
                  debounceTimeout={500}
                  onChange={event => this.getMovieSearch(event)}
                />
              </div>
              {this.state.MovieSearch.map(movie => {
                if (movie.Poster !== "N/A" && movie.Poster != " ") {
                  console.log(movie.Poster);
                  MovieItems.push(movie);
                }
              })}
              <MovieGrid movies={MovieItems} />
            {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    );
  }
}
