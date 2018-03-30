import React, { Component } from 'react';
import './form.scss';

export default class Form extends Component {

    render() {
        return (
            <form className='form'>
                <label>
                    <span>First Name *</span>
                    <input placeholder="First Name"/>
                </label>
            </form>
        );
    }
}