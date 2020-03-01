import React from 'react';
import classes from './WhatTime.module.css';
import projectClasses from '../projectStyles.module.css';

import githubIcon from '../../images/github.svg';
import linkIcon from '../../images/link.svg';


export default function WhatTime() {
    return <div>
        <h2 className={projectClasses.ProjectHeader}>What Time</h2>

        <img src={linkIcon} className={projectClasses.LinkIcon}/>
        <img src={githubIcon} className={projectClasses.GithubIcon}/>

        <h3>Description</h3>
        <p className={projectClasses.ProjectParagraph}>A productivity tool that helps event organizers find times that every member is available, regardless of time-zone. After a user signs up with a username and password, they can create an event survey for a specified day in the future. They then have access to a sharable link. With this link, anybody can submit their availabilities. The user can see times when everyone is available and can narrow down the number of people needed (i.e times 4 people are available), and has the ability to remove submissions.</p>
        
        <h3>Challenges</h3>
        <p className={projectClasses.ProjectParagraph}>Due to the possibility of storing sensitive information (usernames, passwords, events) authentication and authorization proved to be one of the more difficult aspects of this project. Through a verification route on the server, the client sends a stored JavaScript Web Token to the API to both verify and to send a new token with a new expiration date, ensuring that a user needs to log in after a long period of inactivity. Further security measures include a series of salt-rounds (b-crypt) prior to storing passwords and rate-limiting on all routes. One logistical concern was storing availabilities efficiently and manipulating data on the client-side to find times that an x number of people are available.</p>

        
    </div>
}
