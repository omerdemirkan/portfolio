import React, { useRef, useState, useEffect } from 'react';
import classes from './Navbar.module.css';

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

    const logoText = '{OD}'

    return <div className={classes.Navbar} style={navBackground ? {backgroundColor: 'rgb(243, 245, 247)', height: '80px'}: null}>
        <h2 className={classes.Logo}><Link className={classes.LogoLink} to='/'>{logoText}</Link></h2>
        <ul className={classes.NavList}>
            <li className={classes.NavListItem}><Link activeClassName={classes.ActiveLink} to='/' className={classes.NavLink}>Home</Link></li>
            <li className={classes.NavListItem}><Link activeClassName={classes.ActiveLink} to='/contact' className={classes.NavLink}>Contact Me</Link></li>
        </ul>
    </div>
}
