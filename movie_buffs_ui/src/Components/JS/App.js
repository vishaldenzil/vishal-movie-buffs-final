import React, { Component } from "react";
import logo from "../Icons/logo.svg";
import bg3 from "../CSS/img/bg3.jpeg";
import "../CSS/App.css";

export default class App extends Component {
  render() {
    const element = (
      <div>
        <Home />
      </div>
    );
    return element;
  }
}

class Home extends Component {
  render() {
    const element = (
      <div>
        <Header />
        <div className="main-container">
          <div className="container-fluid dark-bg">
            <div className="container dark-bg">
              <Carousel />
            </div>
          </div>
          <div className="container-fluid light-bg">
            <div className="container">
              <MovieShelf />
            </div>
          </div>
        </div>
      </div>
    );
    return element;
  }
}

class Header extends Component {
  render() {
    return (
      <div className="Search-container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span className="Header-text display-4">MovieBuffs</span>
          <Logout />
          <Search />
        </header>
      </div>
    );
  }
}

class Search extends Component {
  render() {
    return (
      <input
        className="quick-search-input"
        value="Quick Search"
        type="search"
      />
    );
  }
}

class Logout extends Component {
  render() {
    return (
      <button type="button" className="logout-btn">
        Logout
      </button>
    );
  }
}

class Carousel extends Component {
  render() {
    const element = (
      <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators custom-carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active" />
          <li data-target="#demo" data-slide-to="1" />
          <li data-target="#demo" data-slide-to="2" />
        </ul>
        <div className="carousel-inner carasole-width">
          <div className="carousel-item active custom-carousel-item">
            <MovieGrid />
          </div>
          <div className="carousel-item custom-carousel-item">
            <MovieGrid />
          </div>
          <div className="carousel-item custom-carousel-item">
            <MovieGrid />
          </div>
        </div>
        <a
          className="arrow carousel-control-prev"
          href="#demo"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon effect" />
        </a>
        <a
          className="arrow carousel-control-next"
          href="#demo"
          data-slide="next"
        >
          <span className="carousel-control-next-icon effect" />
        </a>
      </div>
    );
    return element;
  }
}

class MovieShelf extends Component {
  render() {
    const element = (
      <div>
        <h3 className="recomended-text">Recomended Movies</h3>
        <br />
        <div className="movie-shelf">
          <MovieGrid />
        </div>
      </div>
    );
    return element;
  }
}

class MovieGrid extends Component {
  render() {
    const element = (
      <div>
        <div className="row">
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
          <MoviePoster />
        </div>
      </div>
    );
    return element;
  }
}

class MoviePoster extends Component {
  render() {
    const element = (
      <div className="col-md-3 col-sm-6 movie">
        <div className="movie-cover-conatiner">
          <img
            className="movie-cover"
            src="http://image.tmdb.org/t/p/original/tvSlBzAdRE29bZe5yYWrJ2ds137.jpg"
            alt=""
          />
        </div>
      </div>
    );
    return element;
  }
}
