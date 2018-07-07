import React, { Component } from "react";
import "../CSS/Carousel.css";
import MovieGrid from "./MovieGrid";

class Carousel extends Component {

	constructor() {
		super()
		this.state = {
			upcomingMovies: []
		}
	}

	getRandomInt(max) {
		let num = Math.floor(Math.random() * Math.floor(max)).toString();
		console.log(num)
		if (num != 0)
			return num
	}

	componentDidMount() {
		let i = 0
		setInterval(() => {

			try {
				i = i + 1
				document.getElementById(i).click()
				if (i >= 3)
					i = 0
			}
			catch (err) { }
		}, 6000)
	}

	componentWillUnmount() {

	}

	render() {
		const element = (
			<div id="demo" className="carousel slide" data-ride="carousel">
				<ul className="carousel-indicators custom-carousel-indicators">
					<li id='1' data-target="#demo" data-slide-to="0" className="active" />
					<li id='2' data-target="#demo" data-slide-to="1" />
					<li id='3' data-target="#demo" data-slide-to="2" />
				</ul>
				<div className="carousel-inner carasole-width">
					<div className="carousel-item active custom-carousel-item">
						<MovieGrid movies={this.props.upcomingMovies.splice(0, 4)} />
					</div>
					<div className="carousel-item custom-carousel-item">
						<MovieGrid movies={this.props.upcomingMovies.splice(0, 4)} />
					</div>
					<div className="carousel-item custom-carousel-item">
						<MovieGrid movies={this.props.upcomingMovies.splice(0, 4)} />
					</div>
				</div>
			</div>
		);
		return element;
	}
}

export default Carousel
