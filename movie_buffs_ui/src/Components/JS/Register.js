import React, { Component } from 'react';
import {register} from '../../MoviesBuffsApi.js'
import {NavLink} from 'react-router-dom'

export default class Register extends Component {

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
        this.handleAgeChange = this.handleAgeChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
    }

    handleFirstNameChange(event) {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastNameChange(event) {
        this.setState({
            lastName: event.target.value
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
        console.log(this.state.firstName)
        register(this.state.firstName, this.state.lastName, this.state.age, this.state.email, this.state.password)
        .then((user) => {
            this.props.history.push("/")
        }) 
        .catch((error) => {
            console.log(error)
        })
    }


    render() {
        const element = <div>
                            <NavLink to='/'>Back</NavLink>
                            <form>
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
                        </div>
        return element
    }
}