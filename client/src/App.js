import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';

import JobsPage from './components/Jobspage/jobspage.component';
import CreateJobPage from './components/Createjobpage/createjobpage.component';
import UploadJobsPage from './components/Uploadjobspage/uploadjobpage.component';

import { GlobalProvider } from './context/global-state.context';

export default function App() {
  return (
    <GlobalProvider>
      <CssBaseline />
      <Router>
        <Switch>
            <Route
                exact
                path="/"
                render={() => {return (<Redirect to="/home"/>)}}
              />
            <Route exact path="/home" component={JobsPage}/>
            <Route exact path="/create-job" component={CreateJobPage}/>
            <Route exact path="/upload-jobs" component={UploadJobsPage}/>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}