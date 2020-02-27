import React from 'react';
import classes from './styles/projects.module.css';

import { Router, Link, Location } from '@reach/router';

import Layout from '../components/Layout/Layout';

// Projects
import Synonymy from '../projects/Synonymy/Synonymy';
import WhatTime from '../projects/WhatTime/WhatTime';
import WorkoutShare from '../projects/WorkoutShare/WorkoutShare';

export default function projects() {
    
    return <Layout>
        <Router basepath='/projects'>
            <Synonymy path='/synonymy'/>
            <WhatTime path='/whattime'/>
            <WorkoutShare path='/workoutshare'/>
        </Router>
    </Layout>
}
