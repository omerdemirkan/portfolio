import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import projectClasses from '../../styles/projectStyles.module.css';
import {Link} from 'gatsby';

// Images
import githubIcon from '../../assets/svgs/github.svg';
import linkIcon from '../../assets/svgs/link.svg';
import arrow from '../../assets/svgs/arrow.svg';

import react from '../../assets/svgs/technologies/react.svg';
import redux from '../../assets/svgs/technologies/redux.svg';
import node from '../../assets/svgs/technologies/node.svg';
import express from '../../assets/svgs/technologies/express.svg';
import mongodb from '../../assets/svgs/technologies/mongodb.svg';

// Gifs
import gif1 from '../../assets/gifs/whattime-gif-1.gif';
import gif2 from '../../assets/gifs/whattime-gif-2.gif';

export default function WhatTime() {

    // Functionality that allows user to browse gifs. I know its janky, but I'm in a hurry.
    const [gifNum, setGifNum] = useState(1);

    const nodeList = <>
        <span className={projectClasses.Node} onClick={() => setGifNum(1)} style={gifNum === 1 ? {opacity: 1} : null}></span>
        <span className={projectClasses.Node} onClick={() => setGifNum(2)} style={gifNum === 2 ? {opacity: 1} : null}></span>
    </>;

    return <Layout><div className={projectClasses.Project}>

        <Link to='/projects/synonymy'>
            <span className={projectClasses.PreviousProjectButtonBox}>
                <img src={arrow}/>
                <span>Previous</span>
            </span>
        </Link>

        <Link to='/projects/workoutshare'>
            <span className={projectClasses.NextProjectButtonBox}>
                <span>Next</span>
                <img src={arrow}/>
            </span>
        </Link>

        <div className={projectClasses.Main}>
            <h1 className={projectClasses.ProjectHeader}>What Time</h1>

            <ul className={projectClasses.LinkList}>
                <li>
                    <img src={linkIcon} style={{transform: 'translateY(2px)'}}/>
                    <a href='https://what-time.herokuapp.com/' target='_blank'>Live Website</a>
                </li>

                <li>
                    <img src={githubIcon}/>
                    <a href='https://github.com/omerdemirkan/whattime' target='_blank'>Repository</a>
                </li>
            </ul>
            
            

            
            <div className={projectClasses.TextSection}>
                <h3>Description</h3>
                <p className={projectClasses.ProjectParagraph}>A productivity tool that helps event organizers find times that every member is available, regardless of time-zone. After a user signs up with a username and password, they can create an event survey for a specified day in the future. They then have access to a sharable link. With this link, anybody can submit their availabilities. The user can see times when everyone is available and can narrow down the number of people needed (i.e times 4 people are available), and has the ability to remove and inspect submissions.</p>
                
            </div>
            
            <div className={projectClasses.TextSection}>
                <h3>Challenges</h3>
                <p className={projectClasses.ProjectParagraph}>Due to the possibility of storing sensitive information (usernames, passwords, events) authentication and authorization proved to be one of the more difficult aspects of this project. Through a verification route on the server, the client sends a stored JavaScript Web Token to the API to both verify and to send a new token with a new expiration date, ensuring that a user needs to log in after a long period of inactivity. Further security measures include a series of salt-rounds (b-crypt) prior to storing passwords and rate-limiting on all routes. One logistical concern was storing availabilities efficiently and manipulating data on the client-side to find times that an x number of people are available.</p>

            </div>

            <div className={projectClasses.SubSection}>
                <h3>Technologies</h3>
                <div className={projectClasses.TechnologiesBox}>
                    <img src={react}/>
                    <img src={redux}/>
                    <img src={node}/>
                    <img src={express} style={{margin: '12px 0'}}/>
                    <img src={mongodb} style={{margin: '12px 0'}}/>
                </div>
                
            </div>

            <div className={projectClasses.SubSection}>
                <h3>Contributors</h3>
                <a href='https://github.com/omerdemirkan' target='_blank'>
                    <img 
                    src='https://avatars2.githubusercontent.com/u/54616154?s=460&u=0dce50d86a6ce79649cb045b5da9127c3cc00bad&v=4'
                    className={projectClasses.Contributor}
                    />
                </a>
            </div>
            
        </div>

        <div className={projectClasses.GifsSection}>
            <h3>See It In Action!</h3>
            <div className={projectClasses.NodeBox}>
                {nodeList}
            </div>
            <img src={gif1} style={gifNum === 1 ? {display: 'inline-block'} : null}/>
            <img src={gif2} style={gifNum === 2 ? {display: 'inline-block'} : null}/>
            
        </div>
        
    </div></Layout>
}
