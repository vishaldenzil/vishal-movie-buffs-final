import React, { Component } from "react";
import {searchId} from '../../MoviesBuffsApi.js'
import "../CSS/MoviePoster.css";

export default class MoviePoster extends Component {

    constructor() {
        super();
        this.state = {
            movie: ''
        }
    }

    componentDidMount() {
        if(this.props.movie) {
            searchId(this.props.movie)
            .then((movie) => {
                if(movie.movie.Poster !== 'N/A') {
                    this.setState({
                        movie: movie.movie
                    })
                }
                
            })
        }
    }

    render() {
        const element = <div className="col-md-3 col-sm-6">
                            <div className="movie-cover-conatiner">
                                <img
                                    className="movie-cover"
                                    src={this.state.movie.Poster && this.state.movie.Poster}
                                    alt=""
                                />
                            </div>
                        </div>
      return element;
  }
}