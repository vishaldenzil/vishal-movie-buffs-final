import React, { Component } from "react";
import "../CSS/DashBoard.css";
import {getUserMovies } from "../../MoviesBuffsApi";
import Header from "./Header.js";
import MovieGrid from "./MovieGrid";
import {Redirect} from 'react-router-dom'
import Footer from './Footer.js'

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
            <MovieGrid movies={this.state.movies} />
         </div>
         <Footer />
        </div>
      );
    }
  }