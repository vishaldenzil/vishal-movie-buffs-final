import React, { Component } from "react";
import { register } from "../../MoviesBuffsApi.js";
import { NavLink } from "react-router-dom";
import "../CSS/Register.css";
import Header from "./Header.js";

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      password: ""
    };
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({
      firstName: event.target.value
    });
  }

  handleLastNameChange(event) {
    this.setState({
      lastName: event.target.value
    });
  }

  handleAgeChange(event) {
    this.setState({
      age: event.target.value
    });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleRegister() {
    console.log(this.state.firstName);
    register(
      this.state.firstName,
      this.state.lastName,
      this.state.age,
      this.state.email,
      this.state.password
    )
      .then(user => {
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const element = (
      <div>
        <Header components={{search: false, logout:false, browseMovies:false}}/>
        <div className="main-register-container">
          <div className="register-helper-container">
            <div className="login-container">
              <form>
                <div class="input-group input-text-margin">
                  <span class="input-group-addon-register">
                    <i class="far fa-user" />
                  </span>
                  <input
                    className="form-control height-width"
                    type="text"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={this.handleFirstNameChange}
                  />
                </div>
                <div class="input-group input-text-margin">
                  <span class="input-group-addon-register">
                    <i class="far fa-user" />
                  </span>
                  <input
                    className="form-control height-width"
                    type="text"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={this.handleLastNameChange}
                  />
                </div>
                <div class="input-group input-text-margin">
                  <span class="input-group-addon-register">
                    <i class="far fa-user" />
                  </span>
                  <input
                    className="form-control height-width"
                    text="text"
                    placeholder="Age"
                    value={this.state.age}
                    onChange={this.handleAgeChange}
                  />
                </div>
                <div class="input-group input-text-margin">
                  <span class="input-group-addon-register">
                    <i class="fas fa-envelope-square" />
                  </span>
                  <input
                    className="form-control height-width"
                    type="text"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                  />
                </div>
                <div class="input-group input-text-margin">
                  <span class="input-group-addon-register">
                    <i class="fas fa-lock" />
                  </span>
                  <input
                    className="form-control height-width"
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                  />
                </div>
                <button type="button" onClick={this.handleRegister}>
                  Register
                </button>
              </form>
              <div className="back-to-sign-in">
                <NavLink to="/">
                  <span class="dn dib-l v-mid mr1">
                    back to Sign In page
                    <i class="fas fa-sign-in-alt signin-icon" />
                  </span>   
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    return element;
  }
}
