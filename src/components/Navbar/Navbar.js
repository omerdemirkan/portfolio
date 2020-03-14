import React, { useRef, useState, useEffect } from 'react';
import classes from './Navbar.module.css';

import logo from '../../images/portfolio-logo.svg';

import { Link } from 'gatsby';

export default function Navbar() {

    // Changing background based on scroll position

    const [navBackground, setNavBackground] = useState(false);
    const navRef = useRef();
    navRef.current = navBackground;

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 60
            if (navRef.current !== show) {
              setNavBackground(show)
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
        document.removeEventListener('scroll', handleScroll)
        }
    }, []);

    return <div className={classes.Navbar} style={navBackground ? {backgroundColor: 'rgb(248, 248, 248)', height: '80px'}: null}>
        <Link className={classes.LogoLink} to='/'>
            <img src={logo} 
            className={classes.Logo} 
            style={navBackground ? {width: '100px', transform: 'translate(10px)'}: null}/>
        </Link>
        <ul className={classes.NavList}>
            <li className={classes.NavListItem}><Link activeClassName={classes.ActiveLink} to='/' className={classes.NavLink}>Home</Link></li>
            <li className={classes.NavListItem}><Link activeClassName={classes.ActiveLink} to='/contact' className={classes.NavLink}>Contact Me</Link></li>
        </ul>
    </div>
}
