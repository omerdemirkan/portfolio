import React from "react";
import Layout from '../components/Layout/Layout';
import ProjectCard from '../components/ProjectCard/ProjectCard';

import classes from '../styles/index.module.css';

// images
import heroImage from '../assets/svgs/hero-image.svg';
import me from '../assets/images/me.png';
import waves from '../assets/svgs/waves.svg';
import resume from '../assets/svgs/resume.svg'

import frontEnd from '../assets/svgs/skills/front-end.svg';
import backEnd from '../assets/svgs/skills/back-end.svg';
import languages from '../assets/svgs/skills/languages.svg';

import workoutshare from '../assets/images/projects/workoutshare.jpg';
import synonymy from '../assets/images/projects/synonymy.jpg';
import whattime from '../assets/images/projects/whattime.jpg';
import journaly from '../assets/images/projects/journaly.jpg';
import socialsense from '../assets/images/projects/socialsense.jpg';

import {Link as Scroll} from 'react-scroll';

export default () => {
    return <Layout>

        <div className={classes.HeroSection}>

            <div className={classes.HeroTextBox}>
                <h1>Hi, I’m <mark>Ömer</mark></h1>
                
                <div>
                    <p>I am a Computer Science Student and Full Stack Developer based in <mark>Los Angeles</mark>, and I specialize in building performant web applications.</p>
                    <div className={classes.HeroButtonsBox}>
                        <Scroll smooth={true} duration={500} offset={0} to='projects-section'><button className={classes.MainHeaderButton}>See My Work</button></Scroll>
                        {/* <Link to='/contact'><button className={classes.SecondaryHeaderButton}>Get In Touch</button></Link> */}
                        <a href='mailto:omerfarukpiano@gmail.com'><button className={classes.SecondaryHeaderButton}>Get In Touch</button></a>
                    </div>

                    <div className={classes.HeroLinkBox}>
                        <a 
                        target='_blank' 
                        href='https://drive.google.com/file/d/1n2PAmeDmpYclGoBsoS5eeTrCHfrf5q5F/view?usp=sharing'
                        >
                            <img style={{backgroundColor: 'white'}} src={resume} alt='resume'/>
                            <span>My Resume</span> 
                        </a>
                    </div>
                </div>
                
            </div>
            <img 
            className={classes.HeroProgrammer}
            src={heroImage}/>
            
        </div>

        <div className={classes.MeSection}>
            <h1>Here’s Who I Am</h1>
            <div className={classes.MePairBox}>
                <img src={me}/>
                <div>
                    <p>I am a Turkish-American Computer Science student at Los Angeles Mission College and a hobbyist Software Developer. I have a passion for building full fledged web applications from the bottom up: from simple and intuitive user interfaces to API design.</p>
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
                
                <ProjectCard
                img={synonymy}
                title='Synonymy'
                description='A program that detects overused words in essays and recommends synonyms.'
                link='/projects/synonymy'
                />
                <ProjectCard
                img={whattime}
                title='What Time'
                description='A productivity tool that helps an event organizer find times people are available.'
                link='/projects/whattime'
                />
                <ProjectCard
                img={workoutshare}
                title='Workout Share'
                description='A platform to create, browse and share workouts with friends.'
                link='/projects/workoutshare'
                />
                <ProjectCard
                img={journaly}
                title='Journaly'
                description='A platform where readers can rate and support journalists (Hacktech 2020 submission).'
                link='/projects/journaly'
                />
                <ProjectCard
                img={socialsense}
                title='SocialSense'
                description='A tool that recommends pics and hashtags for Instagram posts (Hacktech 2020 submission).'
                link='/projects/socialsense'
                />
            </div>
        </div>
        
    </Layout>
}
