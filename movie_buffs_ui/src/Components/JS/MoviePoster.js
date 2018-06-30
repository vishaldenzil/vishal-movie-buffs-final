import React, { Component } from "react";
import {NavLink} from 'react-router-dom'
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
                this.setState({
                    movie: movie.movie
                })
            })
        }
    }

    render() {
        const element = <div className="col-md-3 col-sm-6">
                            <div className="movie-cover-conatiner">
                                <NavLink to={`/desc/${this.state.movie.imdbID}`}><img
                                    className="movie-cover"
                                    src={this.state.movie.Poster && this.state.movie.Poster}
                                    alt=""/>
                                </NavLink>
                                <div className='middle'>
                                    <h6>{this.state.movie.Title}</h6>
                                </div>
                            </div>
                        </div>
      return element;
  }
}

