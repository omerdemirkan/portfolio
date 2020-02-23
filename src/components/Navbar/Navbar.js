import React from 'react';
import classes from './Navbar.module.css';

import { Link } from 'gatsby';

export default function Navbar() {
    return <div className={classes.Navbar}>
        <h2 className={classes.Logo}><Link className={classes.LogoLink} to='/'>Omer Demirkan</Link></h2>
        <ul className={classes.NavList}>
            <li className={classes.NavListItem}><Link to='/' className={classes.NavLink}>Home</Link></li>
            <li className={classes.NavListItem}><Link to='/contact' className={classes.NavLink}>Contact Me</Link></li>
        </ul>
        
        
    </div>
}
