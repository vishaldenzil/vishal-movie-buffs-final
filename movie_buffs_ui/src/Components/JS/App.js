import React, {Component} from 'react';
import '../CSS/App.css';
import  {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './Login.js';
import Register from './Register.js';
import Home from './Home.js'
import Description from './Description.js'
import Home from './Home.js'


export default class App extends Component {
    render() {
        const element = <BrowserRouter>
                            <Switch>
                                <Route path='/' component={Login} exact />
                                <Route path='/register' component={Register} exact />
                                <Route path='/home'  component={Home} exact />
                                <Route path='/desc' component={Description} exact />
                            </Switch>
                        </BrowserRouter>
        return element
    }
}