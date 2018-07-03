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
        let sessionDetails = {
          localId: user.localId,
          refreshToken: user.refreshToken
        };
        localStorage.setItem("sessionDetails", JSON.stringify(sessionDetails));
        this.props.history.push("/home");
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const element = (
      <div>
        <Header components={{Logout: false, Seacrh: false}}/>
        <div className="main-login-container">
          <div className="main-helper-container">
            <div className="login-container">
              <form>
                <div class="input-group email">
                  <span class="input-group-addon">
                    <i class="far fa-user" />
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
                <button type="button" onClick={this.handleLogin}>
                  Login
                </button>
              </form>
              <hr className="line-sapration" />
              <div className="online-login">
                <h5 className="social-login-text">Login with Social</h5>
                <div className="google-login" />
                <div className="fb-login" />
              </div>
              <hr className="line-sapration" />
              <h5 className="register-text">
                New to MovieBuffs ?{" "}
                <code>
                  <NavLink to="/register">register here...<i class="fas fa-user-plus"></i></NavLink>
                </code>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
    return element;
  }
}
