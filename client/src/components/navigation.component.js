import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Home } from './home.component';
import { AddJob } from './add-job.component';

// function HomeTest() {
//     return <h2>Home</h2>;
// }

// function JobsTest() {
//     return <h2>Jobs</h2>;
// }

export const NavigationBar = () => {
    return (
        <Router>
        <nav>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/jobs">Add a Job!</Link>
                </li>
            </ul>
        </nav>
        <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/jobs" component={AddJob}/>
        </Switch>
    </Router>
    );
}