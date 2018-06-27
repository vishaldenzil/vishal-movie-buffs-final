import React, { Component } from 'react';
import logo from '../Icons/logo.svg';
import '../CSS/App.css';

export default class App extends Component {
    render() {
        const element = <div>
                            <Home />
                        </div>
        return element
    }
}

class Home extends Component {
    render() {
        const element = <div>
                            <Header />
                            <div className='container-fluid dark-bg'>
                                <div className='container'>
                                    <Carousel />
                                </div>
                            </div>
                            <div className='container-fluid light-bg'>
                                <div className='container'>
                                    <MovieShelf />
                                </div>
                            </div>
                        </div>
        return element
    }
}

class Header extends Component {
  render() {
    return (
      <div className="Search-container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="Header-text">movieBuffs</h1>
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
      <button type="button" class="logout-btn">
        Logout
      </button>
    );
  }
}

class Carousel extends Component {
    render() {
        const element = <div id="demo" className="carousel slide" data-ride="carousel">
                            <ul className="carousel-indicators">
                                <li data-target="#demo" data-slide-to="0" className="active"></li>
                                <li data-target="#demo" data-slide-to="1"></li>
                                <li data-target="#demo" data-slide-to="2"></li>
                            </ul>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <MovieGrid />
                                </div>
                                <div className="carousel-item">
                                    <MovieGrid />
                                </div>
                                <div className="carousel-item">
                                    <MovieGrid />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </a>
                            <a className="carousel-control-next" href="#demo" data-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </a>
                        </div>
        return element
    }
}

class MovieShelf extends Component {
    render() {
        const element = <div>
                            <h3>Recomended Movies</h3> 
                            <MovieGrid /> 
                        </div>
        return element
    }
}

class MovieGrid extends Component {
    render() {
        const element = <div>
                            <div className='row'>
                                <MoviePoster />
                                <MoviePoster />
                                <MoviePoster />
                                <MoviePoster />
                            </div>
                        </div>
        return element
    }
}

class MoviePoster extends Component {
    render() {
        const element = <div className='col-md-3 col-sm-6 movie'>
                            <div className='movie-cover-conatiner'>
                                <img className='movie-cover' src='http://image.tmdb.org/t/p/original/tvSlBzAdRE29bZe5yYWrJ2ds137.jpg' alt='' />
                            </div>
                        </div>
        return element
    }
}