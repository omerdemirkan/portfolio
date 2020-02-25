import React from "react";
import Layout from '../components/Layout/Layout';

import classes from './styles/index.module.css';

import githubIcon from '../images/github.svg';
import linkIcon from '../images/link.svg';
import hi from '../images/hi.svg';

import {Link as Scroll} from 'react-scroll';
import {Link} from 'gatsby';

export default () => {
    return <Layout>
        <div className={classes.Hero}>

            <div className={classes.HeroTextBox}>
                <div className={classes.HeroIntoductionBox}>
                    <img src={hi} className={classes.HiHeader}/>
                    <h1 className={classes.NameHeader}>I'm <span className={classes.Orange}>Omer</span>.</h1>
                </div>
                
                <p>I’m a full-stack developer based in Los Angeles and I specialize in building performant web applications.</p>
                <Scroll smooth={true} duration={500} offset={-80} to='projects-section'><button className={classes.PrimaryButton}>See My Work</button></Scroll>
                <Link to='/contact'><button className={classes.SecondaryButton}>Contact Me</button></Link>
            </div>
        </div>


        <div className={classes.ProjectsSection} id='projects-section'>
            
            <h1 className={classes.ProjectsSectionHeader}>My Projects</h1>

            <div className={classes.Project}>
                <h2 className={classes.ProjectHeader}>Synonymy</h2>
                <img src={linkIcon} className={classes.LinkIcon}/>
                <img src={githubIcon} className={classes.GithubIcon}/>

                <h3>Description</h3>
                <p className={classes.ProjectParagraph}>Synonymy is a web application that finds overused words in your essays and recommends synonyms. It works by looking for words in your essay in a list of English words ranked from most to least used. Because words in English follow a Zipf distribution, it uses that word's rank in this list to find the word's expected use in day to day language. Next, it compares the expected usage to the usage in your essay to come up with a score (how overused it perceives a word to be). Finally, it ranks the words from most to least overused and finds synonyms for the top ten, highlighting their instances within the essay.</p>
                
                <h3>Challenges</h3>
                <p className={classes.ProjectParagraph}>Implementing all text-searching functionality on the client proved to be difficult. The web app parses all words locally and only sends a request for ten synonyms.An issue came from refreshing the search after the user stops typing. Initially, the web app would send a new request for ten words on each search, regardless of whether or not there were any new words to get synonyms for. To solve this issue, I had all loaded synonyms stored in redux and made a second action creator specifically for refreshing a search that would ignore words with synonyms already loaded and would bypass the request entirely if no new words show up in the top ten.</p>

            </div>
            <div className={classes.Project}>
                <h2 className={classes.ProjectHeader}>What Time</h2>

                <img src={linkIcon} className={classes.LinkIcon}/>
                <img src={githubIcon} className={classes.GithubIcon}/>

                <h3>Description</h3>
                <p className={classes.ProjectParagraph}>A productivity tool that helps event organizers find times that every member is available, regardless of time-zone. After a user signs up with a username and password, they can create an event survey for a specified day in the future. They then have access to a sharable link. With this link, anybody can submit their availabilities. The user can see times when everyone is available and can narrow down the number of people needed (i.e times 4 people are available), and has the ability to remove submissions.</p>
                
                <h3>Challenges</h3>
                <p className={classes.ProjectParagraph}>Due to the possibility of storing sensitive information (usernames, passwords, events) authentication and authorization proved to be one of the more difficult aspects of this project. Through a verification route on the server, the client sends a stored JavaScript Web Token to the API to both verify and to send a new token with a new expiration date, ensuring that a user needs to log in after a long period of inactivity. Further security measures include a series of salt-rounds (b-crypt) prior to storing passwords and rate-limiting on all routes. One logistical concern was storing availabilities efficiently and manipulating data on the client-side to find times that an x number of people are available.</p>

            </div>
            <div className={classes.Project}>
                <h2 className={classes.ProjectHeader}>Workout Share</h2>
                <img src={linkIcon} className={classes.LinkIcon}/>
                <img src={githubIcon} className={classes.GithubIcon}/>

                <h3>Description</h3>
                <p className={classes.ProjectParagraph}>Workout Share is a website where you can create your workouts and share them with friends with a sharable link. The user is also able to browse through other popular workouts ranked by likes and time, with the ability to favorite posts. Workouts that the user has liked and posted are stored and can be accessed through designated pages It is personalized out of the box, so there is no username or password needed. Users have access to their workouts and favorited workouts through a Javascript Web Token stored on the client.</p>
                
                <h3>Challenges</h3>
                <p className={classes.ProjectParagraph}>The greatest issue proved to be like concurrency. Once workouts are loaded, the web app has to figure out which posts are and are not liked by the user beforehand. Furthermore, if the user had clicked on a post, opening up another instance at the top of the page and liked it, the original post would have to update with the other instance. Because of the scaling issues involved with the server checking whether or not the user likes each of the posts it sends, I solved this issue by storing the ids of the posts that the user has liked in order to check for posts that the user had already liked. Other challenges included infinite loading minimizing automatic requests while changing paths (between all, powerlifting, etc.) for opt-in refreshes by the user.</p>

            </div>
        </div>
        
    </Layout>
}
