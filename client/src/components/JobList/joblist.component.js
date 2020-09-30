import React, { useContext } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


import { GlobalContext } from '../../context/global-state.context';


import JobSearchBar from '../Jobsearchbar/searchbar.component';
import Job from '../Job/job.component';

function JobList() {
  const { jobs } = useContext(GlobalContext);

  return(
        <Container maxWidth="lg" component="main">
          <JobSearchBar />
          <Typography component="h2" variant="h4" color="textPrimary">
            Today's Remote Jobs
          </Typography>
          <Grid container spacing={5} direction="column">
            {jobs.map((job, index) => (<Job key={index} job={job} />))}
          </Grid>
      </Container>
    );
}

export default JobList;