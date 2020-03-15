import React from 'react';
import classes from './Footer.module.css';

import github from '../../assets/svgs/github.svg';
import linkedin from '../../assets/svgs/linkedin.svg';
import email from '../../assets/svgs/email.svg';

export default function Footer() {
    return <div className={classes.Footer}>
        <div className={classes.MainBox}>
            <h3>Omer Demirkan {new Date().getFullYear()}</h3>
            <div>
                <a href='https://www.linkedin.com/in/omer-demirkan' target='_blank'>
                    <img src={linkedin}/>
                </a>
                <a href="https://github.com/omerdemirkan" target="_blank">
                    <img src={github} style={{color: 'black'}}/>
                </a>
                <a href="mailto:omerfarukpiano@gmail.com">
                    <img src={email}/>
                </a>
            </div>
        </div>
        
    </div>
}
