import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import {login} from '../../MoviesBuffsApi.js'

export default class Login extends Component {
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
            this.props.history.push("/home");
            let sessionDetails = {
                'localId': user.localId,
                'refreshToken': user.refreshToken
            }
            localStorage.setItem('sessionDetails', JSON.stringify(sessionDetails))
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        const element = <div>
                            <NavLink to='/register'>register</NavLink>
                            <form>
                                <input type="text" placeholder="Email" value={this.state.email} 
                                onChange={this.handleEmailChange} />
                                <input type="password" placeholder="Password" 
                                value={this.state.password} onChange={this.handlePasswordChange}/>
                                <button type="button" onClick={this.handleLogin}>Login</button>
                            </form>
                        </div>
        return element
    }
}