import React, { Component } from 'react';


export default class MovieShelf extends Component {
	
	render() {
		render() {
	        const element = <div className="movie-shelf">
                                <h2 className="movie-shelf-title">{this.props.title}</h2> 
                                <MovieGrid /> 
	                        </div>
	        return element
    	}
	}
}