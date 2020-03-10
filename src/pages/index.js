import React from "react";
import Layout from '../components/Layout/Layout';

import classes from './styles/index.module.css';

// images
import heroImage from '../images/hero-image.svg'
import workoutshare from '../images/workoutshare.png';
import synonymy from '../images/synonymy.png';
import whattime from '../images/whattime.png';

import {Link as Scroll} from 'react-scroll';
import {Link} from 'gatsby';

export default () => {
    return <Layout>
        <div>

            <div>
                <h1>I’m Ömer</h1>
                <h1>Full Stack Developer</h1>
                
                <div>
                    <p>I am a Computer Science Student and Software Engineer based in Los Angeles, and I specialize in building performant web applications.</p>
                    <Scroll smooth={true} duration={500} offset={-80} to='projects-section'><button>See My Work</button></Scroll>
                    <Link to='/contact'><button>Contact Me</button></Link>
                </div>
                
            </div>
            <img src={heroImage}/>
            
        </div>

        <div>
            <h1>Here’s Who I Am</h1>
            <div>
                <p>I am a Turkish-American Computer Science student at Los Angeles Mission College and a hobbyist Full Stack Developer. I have a passion for building full fledged web applications from the bottom up, from simple and intuitive user interfaces to database structures.</p>
            </div>
        </div>


        <div id='projects-section'>
            <h1>Here's Some Of My Work</h1>
            <div>
                <div>
                    <img src={synonymy}/>

                </div>
                <div>
                    <img src={whattime}/>
                    
                </div>
                <div>
                    <img src={workoutshare}/>
                    
                </div>
            </div>
        </div>
        
    </Layout>
}
