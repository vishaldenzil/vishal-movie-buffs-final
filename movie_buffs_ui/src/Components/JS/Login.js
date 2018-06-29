import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { login } from "../../MoviesBuffsApi.js";
import Header from "./Header.js";
import "../CSS/Login.css";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      login: ""
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
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

  handleLogin() {
    login(this.state.email, this.state.password)
      .then(user => {
        this.props.history.push("/home");
        let sessionDetails = {
          localId: user.localId,
          refreshToken: user.refreshToken
        };
        localStorage.setItem("sessionDetails", JSON.stringify(sessionDetails));
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const element = (
      <div>
        <Header />
        <div className="main-login-container">
          <div className="login-container">
            <form>
              <div class="input-group email">
                <span class="input-group-addon">
                  <i class="glyphicon glyphicon-user" />
                </span>
                <input
                  className="form-control height-width"
                  type="text"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                />
              </div>
              <div class="input-group password">
                <span class="input-group-addon">
                  <i class="glyphicon glyphicon-lock" />
                </span>
                <input
                  className="form-control height-width"
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                />
              </div>
              <button type="button" onClick={this.handleLogin}>
                Login
              </button>
            </form>
            <hr/>
            <div className="online-login">
            <h5 className="social-login-text">Login with Social</h5>
                <div className="google-login">
                </div>
                <div className="fb-login">
                </div>
            </div>
            <hr/>
            <NavLink to="/register">register</NavLink>
          </div>
        </div>
      </div>
    );
    return element;
  }
}
