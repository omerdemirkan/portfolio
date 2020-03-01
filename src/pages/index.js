import React from "react";
import Layout from '../components/Layout/Layout';

import classes from './styles/index.module.css';

import githubIcon from '../images/github.svg';
import linkIcon from '../images/link.svg';

import {Link as Scroll} from 'react-scroll';
import {Link} from 'gatsby';

export default () => {
    return <Layout>
        <div className={classes.Hero}>

            <div className={classes.HeroTextBox}>
                <div className={classes.HeroIntoductionBox}>
                    <h1 className={classes.NameHeader}>I'm <span className={classes.Orange}>Omer</span>.</h1>
                </div>
                
                <p>I’m a full-stack developer based in Los Angeles and I specialize in building performant web applications.</p>
                <Scroll smooth={true} duration={500} offset={-80} to='projects-section'><button className={classes.PrimaryButton}>See My Work</button></Scroll>
                <Link to='/contact'><button className={classes.SecondaryButton}>Contact Me</button></Link>
            </div> 
        </div>


        <div className={classes.ProjectsSection} id='projects-section'>
            
            <h1 className={classes.ProjectsSectionHeader}>My Projects</h1>
        </div>
        
    </Layout>
}
