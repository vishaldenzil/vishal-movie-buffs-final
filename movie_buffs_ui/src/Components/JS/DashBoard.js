import React, { Component } from "react";
import "../CSS/DashBoard.css";
import {addUserMovie,getUserMovies } from "../../MoviesBuffsApi";
import Header from "./Header.js";
import MovieGrid from "./MovieGrid";
export default class DashBoard extends Component {
    constructor() {
      super();
      this.state = {
        MovieDashBoard: undefined
      };
    
      this.getUserMovie= this.getUserMovie.bind(this);
    }
  
    

   getUserMovie()
   {
    let id=JSON.parse(localStorage.sessionDetails).localId
    getUserMovies(id).then(movie=>{
        this.setState({MovieDashBoard:movie});
    })
    

   }
    componentDidMount()
    {
      this.getUserMovie();
    }
  
    render() {
      let MovieItems = [];
      return (
        <div>
          <Header
            components={{ logout: true, search: false, browseMovies: true }}/>
          <div className="main-container-for-search-page">
             <div className="container-fluid light-bg">
                <div className="container size">
                    {this.state.MovieDashBoard && Object.keys(this.state.MovieDashBoard).map(movie => {
                
                        MovieItems.push(movie);
                    })}
                    <MovieGrid movies={MovieItems} />
                </div>
            </div>
         </div>
        </div>
      );
    }
  }
  
 /* Object.keys(this.state.MovieDashBoard).forEach((id) => {
	console.log(id)
	console.log(this.state.MovieDashBoard[id])
})*/