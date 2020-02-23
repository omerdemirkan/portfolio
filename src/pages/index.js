import React from "react";
import Layout from '../components/Layout/Layout';

import classes from './styles/index.module.css';

import languages from '../images/languages.svg';
import frontend from '../images/front-end-frameworks.svg';
import backend from '../images/back-end-frameworks.svg';

export default () => {
    return <Layout>
        <div className={classes.Hero}>

            <div className={classes.HeroTextBox}>
                <h1>Hi, I'm Omer</h1>
                <p>I’m a full-stack developer based in Los Angeles and I specialize in building performant web applications.</p>

            </div>
        </div>

        <div className={classes.SkillsSection}>
            <h1 className={classes.SkillsSectionHeader}>What do I know?</h1>

            <div className={classes.SkillBox}>
                <img src={languages} className={classes.Logos}/>

            </div>
                
            <div className={classes.SkillBox}>
                <img src={frontend} className={classes.Logos}/>

            </div>

            <div className={classes.SkillBox}>
                <img src={backend} className={classes.Logos}/>

            </div>
        </div>
        
    </Layout>
}
