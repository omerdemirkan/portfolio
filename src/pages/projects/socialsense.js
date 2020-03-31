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
import python from '../../assets/svgs/technologies/python.svg';
import pytorch from '../../assets/svgs/technologies/pytorch.svg';

// Gifs
import gif1 from '../../assets/gifs/socialsense-gif-1.gif';
import gif2 from '../../assets/gifs/socialsense-gif-2.gif';

export default function WhatTime() {

    // Functionality that allows user to browse gifs. I know its janky, but I'm in a hurry.
    const [gifNum, setGifNum] = useState(1);

    const nodeList = <>
        <span className={projectClasses.Node} onClick={() => setGifNum(1)} style={gifNum === 1 ? {opacity: 1} : null}></span>
        <span className={projectClasses.Node} onClick={() => setGifNum(2)} style={gifNum === 2 ? {opacity: 1} : null}></span>
    </>;

    return <Layout><div className={projectClasses.Project}>

        <Link to='/projects/workoutshare'>
            <span className={projectClasses.PreviousProjectButtonBox}>
                <img src={arrow}/>
                <span>Previous</span>
            </span>
        </Link>

        <Link to='/projects/synonymy'>
            <span className={projectClasses.NextProjectButtonBox}>
                <span>Next</span>
                <img src={arrow}/>
            </span>
        </Link>

        <div className={projectClasses.Main}>
            <h1 className={projectClasses.ProjectHeader}>SocialSense</h1>

            <ul className={projectClasses.LinkList}>
                <li>
                    <img src={linkIcon} style={{transform: 'translateY(2px)'}}/>
                    <a href='https://devpost.com/software/socialsense-ai' target='_blank'>Devpost Submission</a>
                </li>

                <li>
                    <img src={githubIcon}/>
                    <a href='https://github.com/omerdemirkan/socialsense' target='_blank'>Repository</a>
                </li>
            </ul>
            
            

            
            <div className={projectClasses.TextSection}>
                <h3>Description</h3>
                <p className={projectClasses.ProjectParagraph}>The winner of Facebook’s “Best hack that gives people a voice” prize at Hacktech 2020. Journaly is a platform where users can rate, review and support journalists through a simple chrome extension. Journalists first sign up to the platform with basic information. On the user’s end, if the chrome extension finds a journalist that exists in the database, the user sees a sidebar in their browser from which they can see the journalist’s user-rating. Further, the user has access to links where they can support the journalist (patreon) and review the journalist.</p>
                
            </div>
            
            <div className={projectClasses.TextSection}>
                <h3>Challenges</h3>
                <p className={projectClasses.ProjectParagraph}>One of the roadblocks we reached was that articles vary greatly in how they are structured. Finding a reliable method for finding a journalist’s name proved to be especially difficult. The extension parses the user’s web page for an article. If an article is found, it scours the article for the name of the journalist that wrote it and fetches that journalist’s information (ratings, publishing-house/employer) along with a link to where the user can support the journalist.</p>

            </div>

            <div className={projectClasses.SubSection}>
                <h3>Technologies</h3>
                <div className={projectClasses.TechnologiesBox}>
                    <img src={python}/>
                    <img src={pytorch}/>
                    <img src={react}/>
                    <img src={redux}/>
                </div>
                
            </div>

            <div className={projectClasses.SubSection}>
                <h3>Contributors</h3>
                <a href='https://github.com/EmmadUsmani' target='_blank'>
                    <img 
                    src='https://avatars0.githubusercontent.com/u/37751258?s=460&u=314e3aa90535cad609277b221b7704cab706bfa8&v=4'
                    className={projectClasses.Contributor}
                    />
                </a>
                <a href='https://github.com/jaivinwylde' target='_blank'>
                    <img 
                    src='https://avatars0.githubusercontent.com/u/46613979?s=460&u=4c56a3dc5533d907736084c356009b0a5a0d3add&v=4'
                    className={projectClasses.Contributor}
                    />
                </a>
                <a href='https://github.com/TahaDemirkan' target='_blank'>
                    <img 
                    src='https://avatars2.githubusercontent.com/u/59131762?s=460&v=4'
                    className={projectClasses.Contributor}
                    />
                </a>
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

