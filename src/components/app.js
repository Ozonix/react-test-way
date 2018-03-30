import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUp from './sign-up/sign-up';

export default class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className='app-container'>
                <Switch>
                    <Route exact path='/' component={ SignUp } />
                </Switch>
            </div>
        );
    }
}