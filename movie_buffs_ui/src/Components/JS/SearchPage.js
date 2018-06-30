
import React, { Component } from 'react';
import "../CSS/MovieGrid.css";
import "../CSS/SearchPage.css";
import {searchTitle} from '../../MoviesBuffsApi'
import MoviePoster from './MoviePoster'
import Header from './Header'
import MovieGrid from './MovieGrid'
import {DebounceInput} from 'react-debounce-input';
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
       if(title.length==0)
        {
            this.setState({MovieSearch:[]})
          
        }
        else
    
        {
          searchTitle(title )
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
       let MovieItems=[];
      return(
           <div>
            <Header/>

           <div className="container-fluid light-bg">
                    <div className="container size">
                     <div className="search-item">
                     <DebounceInput minLength={2} debounceTimeout={500} onChange={event =>this.getMovieSearch(event)} />
                     <div className="search-sumbit"><input className="search-button"  type="submit"  value="Search"/></div>
                     </div>
                       {this.state.MovieSearch.map((movie) => {
                        if(movie.Poster !== "N/A" && movie.Poster!=" ")
                        {
                         console.log(movie.Poster)
                          MovieItems.push(movie.imdbID)
                        }
                        })} 
                        <MovieGrid movies={MovieItems}/>

                    

                    </div>
                </div> 
            </div>

           
      );
   }
}

