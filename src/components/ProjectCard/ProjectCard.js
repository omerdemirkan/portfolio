import React from 'react';
import classes from './ProjectCard.module.css';
import {Link} from 'gatsby';

export default function ProjectCard({img, title, description, link, outOfSite}) {
    return <div className={classes.ProjectCard}>
        <img src={img}/>
        <h2>{title}</h2>
        <p>{description}</p>

        {outOfSite ?
            <a href={link} target='_blank'><button>See More</button></a>
        : 
            <Link to={link}><button>See More</button></Link>
        }
    </div>
}
