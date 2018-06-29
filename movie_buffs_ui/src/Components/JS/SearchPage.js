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

    getMovieSearch()
    {
       let title="the dark knight";
       searchTitle(title)
         .then((movie) => {
            this.setState({MovieSearch:movie})
         });
    }

    componentDidMount()
    {
       this.getMovieSearch();
    }

   render()
   {
      return(
           <div>
            <Header/>

           

            <div className="container-fluid light-bg">
                    <div className="container size">
                     <div className="search-item">
                        <div className="search-text"><input className="search-box" type="text" /></div>
                         <div className="search-sumbit"><input className="search-button"  type="submit"  value="Search"/></div>
                     </div>
                        <MovieGrid movies={this.state.MovieSearch.map((movie) => {
                        if(movie.Poster !== "N/A") 
                            return movie.imdbID
                        })} />
                    </div>
                </div> 
            </div>

           
      );
   }
}


{/* <div className="movie-shelf-container">
                
                
<div className="row" > 
  {data.map(element=>{
      if(element.Poster !== "N/A")
        return <MoviePoster key={element} movie={element}/>
     }
 )}

     
</div> 
</div> */}
 