import React, { Component } from 'react';
import Form from '../../units/form/form';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faLock }  from '@fortawesome/fontawesome-free-solid';

import './sign-up.scss';

export default class SignUp extends Component {

    constructor() {
        super();
    }

    render() {
        let curentStep = 0;
        
        const steps = [
            '1. Personal Info',
            '2. Identify Info',
            '3. Employment Info',
            '4. Housing Info'
        ];

        const stepsTitle = [
            {
                icon: faLock,
                title: 'Personal Information'
            },
            {
                icon: faLock,
                title: 'Identify Info',
            },
            {
                icon: faLock,
                title: 'Employment Info',
            },
            {
                icon: faLock,
                title: 'Housing Info'
            }
        ];

        const stepsLine = steps.map((step, index) => 
            <button className={ index == curentStep ? 'step-button step-curent' : 'step-button' } key={ step.toString() }>{ step }</button>
        );

        return (
            <div className='sign-up'>
                <div className='sign-up-header'>{ stepsLine }</div>
                <div className="sign-up-title">
                    <b>Step {curentStep + 1}: <FontAwesomeIcon icon={stepsTitle[curentStep]['icon']} /> { stepsTitle[curentStep]['title'] }</b>
                </div>
                <Form />
                {/* <img src="../../assets/images/fff.jpg" /> */}
            </div>
        );
    }
}