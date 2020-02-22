import React from 'react';
import classes from './Layout.module.css';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function Layout(props) {
    return <>
        <div className={classes.Layout}>
            <Navbar/>
            {props.children}
        </div>
        <Footer/>
    </>
}
