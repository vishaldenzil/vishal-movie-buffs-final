import React, { Component } from 'react';
import '../CSS/App.css';


export default class SearchItem extends Component
{
    constructor()
    {
        super()
        this.state={
            data:''
          }
    }

    
   render()
   {
      return(
        
               <div>
                      <div className="search-bar">
                         <div>
                             <input className="search-text" type="text"/>
                         </div>
                          <div>
                              <input type="button" value="Search"/>
                          </div>
                        </div> 
            
                    <div className="movie-grid "> 
                      { this.state.data.map(element => 
                         {
                            return <Movie/>;
                         })
                       }
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
            <div className="movie"> <img src=""/></div> );
     }
 }
