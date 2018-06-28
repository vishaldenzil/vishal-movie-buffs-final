import React, { Component } from 'react';
import logo from '../ICONS/logo.svg';
import {login, register} from '../../MoviesBuffsApi.js';
import '../CSS/App.css';

export default class App extends Component {
    render() {
        const element = <div>
                            <Register />
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
