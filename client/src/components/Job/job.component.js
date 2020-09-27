import React from 'react';
import Grid from '@material-ui/core/Grid';

import CustomCard from './card.component';

function Job(props) {
  const job = props.job;

  return(
        // Enterprise card is full width at sm breakpoint
        <Grid 
          item 
          key={job.title}
          >
          <CustomCard job={job} />
      </Grid>
  );
}

export default Job;