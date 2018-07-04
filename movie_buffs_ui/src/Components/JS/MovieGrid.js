import React, { Component } from "react";
import "../CSS/MovieGrid.css";
import MoviePoster from "./MoviePoster.js";

class MovieGrid extends Component {

    constructor() {
        super();
        this.state = {
            movies: []
        }
    }

    render() {
        const element = <div className="movie-shelf-container">
                            <div className="row">
                                {this.props.movies && this.props.movies.map((movie) => {
                                    return <MoviePoster key={movie.imdbID} movie={movie} />
                                })}
                            </div>
                        </div>
        return element;
    }
}

export default MovieGrid;
