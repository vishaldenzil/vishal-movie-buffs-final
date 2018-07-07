import React, { Component } from "react";
import "../CSS/Description.css";
import "../CSS/description-responsive.css";
import {addUserMovie} from "../../MoviesBuffsApi";
import Loading from './Loading.js'
import swal from 'sweetalert'

export default class Details extends Component {  
    constructor()
     {
        super();
        this.getMovieDashBoard = this.getMovieDashBoard.bind(this);
     }
    getMovieDashBoard(imdb)
    {
      if(imdb!==undefined)
      {
        let id=JSON.parse(localStorage.sessionDetails).localId
        addUserMovie(id,imdb).then( 
        swal
        ({
          title: 'Added to Dashboard ',
        }));
      }
    }
    render() {
        let data=this.props.data;
        const element = <div className="column-2">
                            <div class="row-1">
                                <h3 className="movie-name"> {data && data.Title}</h3>
                                <div className="height-bw-name-year" />
                                <h4 className="year">{data && data.Year}</h4>
                                <h6 className="movie-type">{data && data.Genre}</h6>
                            </div>
                            <div className="height-bw-year-rating" />
                            <div>
                                <i class="fab fa-imdb imdb-icon-font" />
                                <h4 className="rating-text">{data && data.imdbRating}</h4>
                                <i onClick={() =>this.getMovieDashBoard(data.imdbID)}
                                class="fas fa-star imdb-star"/>
                            </div>
                            <div>
                                <i className="far fa-money-bill-alt icon-size" />
                                <h4 className="rating-text">{data && data.BoxOffice}</h4>
                            </div>
                            <div>
                                <div className="height-bw-rating-plot" />
                                <h4 className="plot"> Plot </h4>
                                <p className="movie-description-para">{data && data.Plot}</p>
                            </div>
                        </div>
      return element;
    }
  }