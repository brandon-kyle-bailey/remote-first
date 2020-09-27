import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import CustomCard from './card.component';

function Job(props) {
  const classes = props.classes;
  const job = props.job;

  return(
        // Enterprise card is full width at sm breakpoint
        <Grid 
          item 
          key={job.title}
          >
          <CustomCard classes={classes} job={job} />
      </Grid>
  );
}

export default Job;