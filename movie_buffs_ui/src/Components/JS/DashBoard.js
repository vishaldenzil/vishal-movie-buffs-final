import React, { Component } from "react";
import "../CSS/DashBoard.css";
import {addUserMovie,getUserMovies } from "../../MoviesBuffsApi";
import Header from "./Header.js";
import MovieGrid from "./MovieGrid";
import {Redirect} from 'react-router-dom'

export default class DashBoard extends Component {
    constructor() {
      super();
      this.state = {
        movies: []
      };
    }

    componentDidMount() {
      let user_id=(JSON.parse(localStorage.sessionDetails).localId) ? (JSON.parse(localStorage.sessionDetails).localId) : null
      if(user_id) {
        getUserMovies(user_id)
        .then((movies) => {
        this.setState({movies: Object.values(movies)});
      })
      }
    }
  
    render() {
      if(!localStorage.sessionDetails) {
        return <Redirect to="/" />
      }
      return (
        <div>
          <Header
            components={{ logout: true, search: false, browseMovies: true }}/>
          <div className="main-container-for-search-page">
             <div className="container-fluid light-bg">
                <div className="container size">
                    <MovieGrid movies={this.state.movies} />
                </div>
            </div>
         </div>
        </div>
      );
    }
  }