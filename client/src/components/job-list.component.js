import React, { useContext } from 'react';
import { Job } from './job.component';

import { GlobalContext } from '../context/global-state.context';

export const JobList = () => {
  const { jobs } = useContext(GlobalContext);

  return (
    <>
      <h3>Jobs:</h3>
      <ul className="list">
        {jobs.map(job => (<Job key={job.id} job={job} />))}
      </ul>
    </>
  )
}