import React from 'react';
import classes from './WorkoutShare.module.css';
import projectClasses from '../projectStyles.module.css';

import githubIcon from '../../images/github.svg';
import linkIcon from '../../images/link.svg';

export default function WorkoutShare() {
    return <div>
        <h2>Workout Share</h2>
        <img src={linkIcon} className={projectClasses.LinkIcon}/>
        <img src={githubIcon} className={projectClasses.GithubIcon}/>

        <h3>Description</h3>
        <p>Workout Share is a website where you can create your workouts and share them with friends with a sharable link. The user is also able to browse through other popular workouts ranked by likes and time, with the ability to favorite posts. Workouts that the user has liked and posted are stored and can be accessed through designated pages It is personalized out of the box, so there is no username or password needed. Users have access to their workouts and favorited workouts through a Javascript Web Token stored on the client.</p>
        
        <h3>Challenges</h3>
        <p>The greatest issue proved to be like concurrency. Once workouts are loaded, the web app has to figure out which posts are and are not liked by the user beforehand. Furthermore, if the user had clicked on a post, opening up another instance at the top of the page and liked it, the original post would have to update with the other instance. Because of the scaling issues involved with the server checking whether or not the user likes each of the posts it sends, I solved this issue by storing the ids of the posts that the user has liked in order to check for posts that the user had already liked. Other challenges included infinite loading minimizing automatic requests while changing paths (between all, powerlifting, etc.) for opt-in refreshes by the user.</p>

        
    </div>
}
