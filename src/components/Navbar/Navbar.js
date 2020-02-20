import React from 'react';
import classes from './Navbar.module.css';

import { Link } from 'gatsby';

export default function Navbar() {
    return <div>
        <h1>This a navbar</h1>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/contact'>Contact Me</Link></li>
        </ul>
        
        
    </div>
}
