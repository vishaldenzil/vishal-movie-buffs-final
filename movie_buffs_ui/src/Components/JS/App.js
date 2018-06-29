import React, {Component} from 'react';
import '../CSS/App.css';
import  {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './Login.js';
import Register from './Register.js';


export default class App extends Component {
    render() {
        const element = <BrowserRouter>
                            <Switch>
                                <Route path='/' component={Login} exact />
                                <Route path='/register' component={Register} exact />
                                <Route path='/home' exact />
                            </Switch>
                        </BrowserRouter>
        return element
    }
}