import React from "react";
import Layout from '../components/Layout/Layout';

import classes from './styles/index.module.css';

// images
import heroImage from '../images/home-page/hero-image.svg';
import me from '../images/home-page/me.png';
import waves from '../images/home-page/waves.svg';

import frontEnd from '../images/skills/front-end.svg';
import backEnd from '../images/skills/back-end.svg';
import languages from '../images/skills/languages.svg';
import workoutshare from '../images/home-page/projects/workoutshare.png';
import synonymy from '../images/home-page/projects/synonymy.png';
import whattime from '../images/home-page/projects/whattime.png';

import {Link as Scroll} from 'react-scroll';
import {Link} from 'gatsby';

export default () => {
    return <Layout>
        <div className={classes.HeroSection}>

            <div className={classes.HeroTextBox}>
                <h1>Hi, I’m <mark>Ömer</mark></h1>
                
                <div>
                    <p>I am a Computer Science Student and Software Engineer based in Los Angeles, and I specialize in building performant web applications.</p>
                    <div className={classes.HeroButtonsBox}>
                        <Scroll smooth={true} duration={500} offset={-200} to='projects-section'><button className={classes.MainHeaderButton}>See My Work</button></Scroll>
                        <Link to='/contact'><button className={classes.SecondaryHeaderButton}>Get In Touch</button></Link>
                    </div>
                </div>
                
            </div>
            <img src={heroImage}/>
            
        </div>

        <div className={classes.MeSection}>
            <h1>Here’s Who I Am</h1>
            <div className={classes.MePairBox}>
                <img src={me}/>
                <div>
                    <p>I am a Turkish-American Computer Science student at Los Angeles Mission College and a hobbyist Full Stack Developer. I have a passion for building full fledged web applications from the bottom up: from simple and intuitive user interfaces to API design.</p>
                </div>
            </div>
        </div>

        <div className={classes.SkillsSection}>
            <img src={waves} className={classes.WavesImage}></img>
            <h1>Here's What I'm Good At</h1>

            <div className={classes.SkillsBox}>

                <div className={classes.SkillBox}>
                    <img src={languages} className={classes.SkillImage}/>
                    <div>
                        <h3>Languages</h3>
                        <p>JavaScript (ES6) - HTML5 - CSS3</p>
                    </div>
                </div>

                <div className={classes.SkillBox}>
                    <img src={frontEnd} className={classes.SkillImage} style={{position: 'relative', right: '4px'}}/>
                    <div>
                        <h3>Front-end Technologies</h3>
                        <p>React - Redux</p>
                    </div>
                </div>

                <div className={classes.SkillBox}>
                    <img src={backEnd} className={classes.SkillImage}/>
                    <div>
                        <h3>Back-end Technologies</h3>
                        <p>NodeJS - Express - MongoDB</p>
                    </div>
                </div>
            </div>
            
        </div>


        <div id='projects-section' className={classes.ProjectsSection}>
            <h1>Here's Some Of My Work</h1>
            <div className={classes.ProjectsBox}>
                <div className={classes.ProjectBox}>
                    <img src={synonymy}/>
                    <h2>Synonymy</h2>
                    <p>A program that detects overused words in essays and recommends synonyms.</p>
                    <Link to='/projects/synonymy'><button>See More</button></Link>
                </div>
                <div className={classes.ProjectBox}>
                    <img src={whattime}/>
                    <h2>What Time</h2>
                    <p>A productivity tool that helps an event organizer find times that every member is available.</p>
                    <Link to='/projects/whattime'><button>See More</button></Link>
                    
                </div>
                <div className={classes.ProjectBox}>
                    <img src={workoutshare}/>
                    <h2>Workout Share</h2>
                    <p>A platform to create, browse and share workouts with friends.</p>
                    <Link to='/projects/workoutshare'><button>See More</button></Link>
                </div>
            </div>
        </div>
        
    </Layout>
}
