import React from "react";
import Layout from '../components/Layout/Layout';

import classes from './styles/index.module.css';

import reactLogo from '../images/react.svg';

export default () => {
    return <Layout>
        <div className={classes.Hero}>

            <div className={classes.HeroTextBox}>
                <h1>Hi, I'm Omer</h1>
                <p>I’m a full-stack developer based in Los Angeles and I specialize in building performant web applications.</p>

            </div>
        </div>
        <div className={classes.SkillsSection}>
            <div className={classes.SkillBox}>
                <img src={reactLogo} className={classes.ReactLogo}/>
            </div>
        </div>
        
    </Layout>
}
