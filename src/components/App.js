import React, { Component } from 'react';
import logo from '../logo.png';
// COMPONENTS

import Left from './Left';
import Right from './Right';


export default class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <img className='logo' src={logo} />
                    <h1 className='title'>React Starter</h1>
                </div>
                <div className='row'>
                    <Left />
                    <Right />
                </div>
            </div>
        );
    }
}
