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
                <p className={projectClasses.ProjectParagraph}>The winner of Oracle’s “Best Hack Using Machine Learning” prize at LA Hacks (UCLA). SocialSense is a web application that enhances Instagram engagement by recommending images and hashtags for posts. After the user enters their username and picks the images they consider uploading, they are given their pics ordered from most to least expected engagement which they can pick from. Once the user chooses an image, the server scrapes the user’s Instagram for data to train and returns a list of up to thirty recommended hashtags along with the expected engagement increase from each hashtag.</p>
                
            </div>
            
            <div className={projectClasses.TextSection}>
                <h3>Challenges</h3>
                <p className={projectClasses.ProjectParagraph}>The most difficult aspect of SocialSense for me was state management (I worked solely on the client). I opted for global state management in redux due to the many views within a single route. Interacting with the back-end proved to be a learning experience in itself, as the main request needed to be split into smaller, more manageable requests in order to support high-resolution images. Further, images needed to be base64 encoded and the sources for each image needed to be extracted in order to display uploaded images.</p>

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

