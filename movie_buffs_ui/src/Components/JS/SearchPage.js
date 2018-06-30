
import React, { Component } from 'react';
import "../CSS/MovieGrid.css";
import "../CSS/SearchPage.css";
import {searchTitle} from '../../MoviesBuffsApi'
import MoviePoster from './MoviePoster'
import Header from './Header'
import MovieGrid from './MovieGrid'
export default class SearchItem extends Component
{
    constructor()
    {
        super()
        this.state={
            MovieSearch:[]
          }
          this.getMovieSearch=this.getMovieSearch.bind(this);
    }

    getMovieSearch(event)
    {
       let title=event.target.value;
       if(title!==" ")
        {
          searchTitle(title)
           .then((movie) => {
              this.setState({MovieSearch:movie})
            });
        }
    }

    // componentDidMount()
    // {
    //    this.getMovieSearch(this);
    // }

   render()
   {
      return(
           <div>
            <Header/>

           <div className="container-fluid light-bg">
                    <div className="container size">
                     <div className="search-item">
                        <div className="search-text"><input className="search-box" type="text" onChange={(event)=>this. getMovieSearch(event)} placeholder="Search by Movie Names"    /></div>
                         <div className="search-sumbit"><input className="search-button"  type="submit"  value="Search"/></div>
                     </div>
                        <MovieGrid movies={this.state.MovieSearch.map((movie) => {
                        if(movie.Poster !== "N/A" && movie.Poster!=" ") 
                            console.log(movie.Poster)
                            return movie.imdbID
                        })} />
                    </div>
                </div> 
            </div>

           
      );
   }
}

