import React, { Component } from 'react';
import logo from '../ICONS/logo.svg';
import {login, register} from '../../MoviesBuffsApi.js';
import '../CSS/App.css';
import bg3 from "../CSS/img/bg3.jpeg";
import Description from "./description"

export default class App extends Component {
    render() {
        const element = <div>
                            <Home />
                        </div>
        return element
    }
}

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            login: ""
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        })
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin() {
        login(this.state.email, this.state.password)
        .then((user) => {
            if(user.error) {
                alert(user.error)
            }
            else {
                alert('login successfull')
                let sessionDetails = {
                    'localId': user.localId,
                    'refreshToken': user.refreshToken
                }
                localStorage.setItem('sessionDetails', JSON.stringify(sessionDetails))
            }
        })
    }
 
    render() {
        const element = <form>
                            <input type="text" placeholder="Email" value={this.state.email} 
                            onChange={this.handleEmailChange} />
                            <input type="password" placeholder="Password" 
                            value={this.state.password} onChange={this.handlePasswordChange}/>
                            <button type="button" onClick={this.handleLogin}>Login</button>
                        </form>
        return element
    }
}

class Register extends Component {

    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            email: '',
            password: '',
        } 
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
        this.handleLastNameChange = this.handleLastNameChange.bind(this)
    }

    handleFirstNameChange(event) {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastNameChange(event) {
        this.setState({
            firstName: event.target.value
        })
    }

    handleAgeChange(event) {
        this.setState({
            age: event.target.value
        })
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        })
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        })
    }

    handleRegister() {

    }


    render() {
        const element = <form>
                            <input type="text" placeholder="First Name" 
                            value={this.state.firstName} onChange={this.handleFirstNameChange} />
                            <input type="text" placeholder="Last Name"
                            value={this.state.lastName} onChange={this.handleLastNameChange} />
                            <input text="text" placeholder="Age"
                            value={this.state.age} onChange={this.handleAgeChange} />
                            <input type="text" placeholder="Email" value={this.state.email} 
                            onChange={this.handleEmailChange} />
                            <input type="password" placeholder="Password" 
                            value={this.state.password} onChange={this.handlePasswordChange} />
                            <button type="button" onClick={this.handleRegister}>Register</button>
                        </form>
        return element
    }
}

class Home extends Component {
    render() {
      const element = (
        <div>
          <Header />
          <Description/>
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