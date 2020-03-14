import React from 'react';
import classes from './ProjectCard.module.css';
import {Link} from 'gatsby';

export default function ProjectCard({img, title, description, link}) {
    return <div className={classes.ProjectCard}>
        <img src={img}/>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to={link}><button>See More</button></Link>
    </div>
}
