import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import projectClasses from '../../styles/projectStyles.module.css';

// Images
import githubIcon from '../../assets/svgs/github.svg';
import linkIcon from '../../assets/svgs/link.svg';
import react from '../../assets/svgs/technologies/react.svg';
import redux from '../../assets/svgs/technologies/redux.svg';
import node from '../../assets/svgs/technologies/node.svg';
import express from '../../assets/svgs/technologies/express.svg';
import mongodb from '../../assets/svgs/technologies/mongodb.svg';

// Gifs
import gif1 from '../../assets/gifs/workoutshare-gif-1.gif';
import gif2 from '../../assets/gifs/workoutshare-gif-2.gif';

export default function WorkoutShare() {

    // Functionality that allows user to browse gifs. I know its janky, but I'm in a hurry.
    const [gifNum, setGifNum] = useState(1);

    const nodeList = <>
        <span className={projectClasses.Node} onClick={() => setGifNum(1)} style={gifNum === 1 ? {opacity: 1} : null}></span>
        <span className={projectClasses.Node} onClick={() => setGifNum(2)} style={gifNum === 2 ? {opacity: 1} : null}></span>
    </>;

    return <Layout><div className={projectClasses.Project}>
        <div className={projectClasses.Main}>
            <h1 className={projectClasses.ProjectHeader}>Workout Share</h1>

            <ul className={projectClasses.LinkList}>
                <li>
                    <img src={linkIcon} style={{transform: 'translateY(2px)'}}/>
                    <a href='https://workoutshare.herokuapp.com/' target='_blank'>Live Website</a>
                </li>

                <li>
                    <img src={githubIcon}/>
                    <a href='https://github.com/omerdemirkan/workout-share' target='_blank'>Repository</a>
                </li>
            </ul>
            
            

            
            <div className={projectClasses.TextSection}>
                <h3>Description</h3>
                <p className={projectClasses.ProjectParagraph}>Workout Share is a website where you can create your workouts and share them with friends with a sharable link. The user is also able to browse through other popular workouts ranked by likes and time, with the ability to favorite posts. Workouts that the user has liked and posted are stored and can be accessed through designated pages It is personalized out of the box, so there is no username or password needed. Users have access to their workouts and favorited workouts through a Javascript Web Token stored on the client.</p>
                
            </div>
            
            <div className={projectClasses.TextSection}>
                <h3>Challenges</h3>
                <p className={projectClasses.ProjectParagraph}>The greatest issue proved to be like concurrency. Once workouts are loaded, the web app has to figure out which posts are and are not liked by the user beforehand. Furthermore, if the user had clicked on a post, opening up another instance at the top of the page and liked it, the original post would have to update with the other instance. Because of the scaling issues involved with the server checking whether or not the user likes each of the posts it sends, I solved this issue by storing the ids of the posts that the user has liked in order to check for posts that the user had already liked. Other challenges included infinite loading minimizing automatic requests while changing paths (between all, powerlifting, etc.) for opt-in refreshes by the user.</p>

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
