import React, { Component } from 'react';
import '../CSS/Search.css';
import {searchTitle} from '../../MoviesBuffsApi'

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
       let data =this.state.MovieSearch;
      return(
        
               <div>
                      
            
                    <div className="movie-grid "> 
                    {data.map(element=>{
                        if(element.Poster !== "N/A")
                            return <Movie Poster={element.Poster}/>
                        }
                    )}

                         
                    </div> 
             </div>

           
      );
   }
}
 class Movie extends Component
 {
     
     render()
     {
         return(
            <div className="movie"> <img src={this.props.Poster}/></div> 
        );
     }
 }