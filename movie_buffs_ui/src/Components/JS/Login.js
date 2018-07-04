import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { login } from "../../MoviesBuffsApi.js";
import Header from "./Header.js";
import "../CSS/Login.css";
import glogo from "../ICONS/gmail.png";
import "../CSS/login-responsive.css";

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
        <Header components={{ Logout: false, Seacrh: false }} />
        <div className="main-login-container">
          <div className="main-helper-container">
            <div className="login-container">
              <form>
                <div className="input-group email">
                  <span className="input-group-addon">
                    <i className="far fa-user" />
                  </span>
                  <input
                    className="form-control height-width"
                    type="text"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                  />
                </div>
                <div className="input-group password">
                  <span className="input-group-addon">
                    <i className="fas fa-lock" />
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
              <br/>
              <div className="online-login">
                <h5 className="social-login-text">Login with Social</h5>
                {/* <div className="google-login">
                  {/* <img
                    className="gmail-logo"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRriQckKDnX4sH0nzM89E6hlVOImUfrnXleF16G9aQ29LGlQ-A2Pg"
                  /> */}
                {/* <i class="fab fa-google-plus-square gmail-logo">
                  <span className="google-login-text">Sign in with Google</span>
                  </i>
                </div>  */}
                <div id="gSignInWrapper">
                  {/* <span class="label">Sign in with:</span> */}
                  <div id="customBtn" class="customGPlusSignIn">
                    <span class="icon" />
                    <span class="buttonText">Sign In with Google</span>
                  </div>
                </div>
              </div>

              <h5 className="register-text">
                New to MovieBuffs ?{" "}
                <code>
                  <NavLink to="/register">
                    register here...<i class="fas fa-user-plus" />
                  </NavLink>
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
