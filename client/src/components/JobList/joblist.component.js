import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import useStyles from './joblist.styles';

import JobSearchBar from '../Jobsearchbar/searchbar.component';
import Job from '../Job/job.component';

const jobs = [
  {
    imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg',
    position: 'Senior Full Stack Developer',
    company: 'Google',
    description: 'Ex eiusmod veniam nisi ut commodo sint aliquip mollit aliqua. Tempor nisi cupidatat reprehenderit enim quis irure ea irure quis enim consequat. Quis qui amet labore in reprehenderit. Occaecat ad velit voluptate aliquip sunt ex mollit. Esse id exercitation nostrud commodo incididunt nulla elit eu pariatur in. Adipisicing qui irure officia do esse. Proident occaecat sint commodo officia id id do laborum adipisicing duis sit. ',
    salary: 75000,
    tags: ['software', 'remote', 'python', 'google', 'web'],
    location: 'remote'
  },
  {
    imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg?img=1',
    position: 'Senior Full Stack Developer',
    company: 'Google',
    description: 'Ex eiusmod veniam nisi ut commodo sint aliquip mollit aliqua. Tempor nisi cupidatat reprehenderit enim quis irure ea irure quis enim consequat. Quis qui amet labore in reprehenderit. Occaecat ad velit voluptate aliquip sunt ex mollit. Esse id exercitation nostrud commodo incididunt nulla elit eu pariatur in. Adipisicing qui irure officia do esse. Proident occaecat sint commodo officia id id do laborum adipisicing duis sit. ',
    salary: 75000,
    tags: ['software', 'remote', 'python', 'google', 'web'],
    location: 'remote'
  },
  {
    imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg',
    position: 'Senior Full Stack Developer',
    company: 'Google',
    description: 'Ex eiusmod veniam nisi ut commodo sint aliquip mollit aliqua. Tempor nisi cupidatat reprehenderit enim quis irure ea irure quis enim consequat. Quis qui amet labore in reprehenderit. Occaecat ad velit voluptate aliquip sunt ex mollit. Esse id exercitation nostrud commodo incididunt nulla elit eu pariatur in. Adipisicing qui irure officia do esse. Proident occaecat sint commodo officia id id do laborum adipisicing duis sit. ',
    salary: 75000,
    tags: ['software', 'remote', 'python', 'google', 'web'],
    location: 'remote'
  },
  {
    imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg',
    position: 'Senior Full Stack Developer',
    company: 'Google',
    description: 'Ex eiusmod veniam nisi ut commodo sint aliquip mollit aliqua. Tempor nisi cupidatat reprehenderit enim quis irure ea irure quis enim consequat. Quis qui amet labore in reprehenderit. Occaecat ad velit voluptate aliquip sunt ex mollit. Esse id exercitation nostrud commodo incididunt nulla elit eu pariatur in. Adipisicing qui irure officia do esse. Proident occaecat sint commodo officia id id do laborum adipisicing duis sit. ',
    salary: 75000,
    tags: ['software', 'remote', 'python', 'google', 'web'],
    location: 'remote'
  },
  {
    imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg',
    position: 'Senior Full Stack Developer',
    company: 'Google',
    description: 'Ex eiusmod veniam nisi ut commodo sint aliquip mollit aliqua. Tempor nisi cupidatat reprehenderit enim quis irure ea irure quis enim consequat. Quis qui amet labore in reprehenderit. Occaecat ad velit voluptate aliquip sunt ex mollit. Esse id exercitation nostrud commodo incididunt nulla elit eu pariatur in. Adipisicing qui irure officia do esse. Proident occaecat sint commodo officia id id do laborum adipisicing duis sit. ',
    salary: 75000,
    tags: ['software', 'remote', 'python', 'google', 'web'],
    location: 'remote'
  },
  {
    imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg?img=1',
    position: 'Senior Full Stack Developer',
    company: 'Google',
    description: 'Ex eiusmod veniam nisi ut commodo sint aliquip mollit aliqua. Tempor nisi cupidatat reprehenderit enim quis irure ea irure quis enim consequat. Quis qui amet labore in reprehenderit. Occaecat ad velit voluptate aliquip sunt ex mollit. Esse id exercitation nostrud commodo incididunt nulla elit eu pariatur in. Adipisicing qui irure officia do esse. Proident occaecat sint commodo officia id id do laborum adipisicing duis sit. ',
    salary: 75000,
    tags: ['software', 'remote', 'python', 'google', 'web'],
    location: 'remote'
  },
  {
    imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg',
    position: 'Senior Full Stack Developer',
    company: 'Google',
    description: 'Ex eiusmod veniam nisi ut commodo sint aliquip mollit aliqua. Tempor nisi cupidatat reprehenderit enim quis irure ea irure quis enim consequat. Quis qui amet labore in reprehenderit. Occaecat ad velit voluptate aliquip sunt ex mollit. Esse id exercitation nostrud commodo incididunt nulla elit eu pariatur in. Adipisicing qui irure officia do esse. Proident occaecat sint commodo officia id id do laborum adipisicing duis sit. ',
    salary: 75000,
    tags: ['software', 'remote', 'python', 'google', 'web'],
    location: 'remote'
  },
  {
    imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg',
    position: 'Senior Full Stack Developer',
    company: 'Google',
    description: 'Ex eiusmod veniam nisi ut commodo sint aliquip mollit aliqua. Tempor nisi cupidatat reprehenderit enim quis irure ea irure quis enim consequat. Quis qui amet labore in reprehenderit. Occaecat ad velit voluptate aliquip sunt ex mollit. Esse id exercitation nostrud commodo incididunt nulla elit eu pariatur in. Adipisicing qui irure officia do esse. Proident occaecat sint commodo officia id id do laborum adipisicing duis sit. ',
    salary: 75000,
    tags: ['software', 'remote', 'python', 'google', 'web'],
    location: 'remote'
  },
  {
    imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg',
    position: 'Senior Full Stack Developer',
    company: 'Google',
    description: 'Ex eiusmod veniam nisi ut commodo sint aliquip mollit aliqua. Tempor nisi cupidatat reprehenderit enim quis irure ea irure quis enim consequat. Quis qui amet labore in reprehenderit. Occaecat ad velit voluptate aliquip sunt ex mollit. Esse id exercitation nostrud commodo incididunt nulla elit eu pariatur in. Adipisicing qui irure officia do esse. Proident occaecat sint commodo officia id id do laborum adipisicing duis sit. ',
    salary: 75000,
    tags: ['software', 'remote', 'python', 'google', 'web'],
    location: 'remote'
  },
  {
    imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg?img=1',
    position: 'Senior Full Stack Developer',
    company: 'Google',
    description: 'Ex eiusmod veniam nisi ut commodo sint aliquip mollit aliqua. Tempor nisi cupidatat reprehenderit enim quis irure ea irure quis enim consequat. Quis qui amet labore in reprehenderit. Occaecat ad velit voluptate aliquip sunt ex mollit. Esse id exercitation nostrud commodo incididunt nulla elit eu pariatur in. Adipisicing qui irure officia do esse. Proident occaecat sint commodo officia id id do laborum adipisicing duis sit. ',
    salary: 75000,
    tags: ['software', 'remote', 'python', 'google', 'web'],
    location: 'remote'
  },
  {
    imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg',
    position: 'Senior Full Stack Developer',
    company: 'Google',
    description: 'Ex eiusmod veniam nisi ut commodo sint aliquip mollit aliqua. Tempor nisi cupidatat reprehenderit enim quis irure ea irure quis enim consequat. Quis qui amet labore in reprehenderit. Occaecat ad velit voluptate aliquip sunt ex mollit. Esse id exercitation nostrud commodo incididunt nulla elit eu pariatur in. Adipisicing qui irure officia do esse. Proident occaecat sint commodo officia id id do laborum adipisicing duis sit. ',
    salary: 75000,
    tags: ['software', 'remote', 'python', 'google', 'web'],
    location: 'remote'
  },
  {
    imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg',
    position: 'Senior Full Stack Developer',
    company: 'Google',
    description: 'Ex eiusmod veniam nisi ut commodo sint aliquip mollit aliqua. Tempor nisi cupidatat reprehenderit enim quis irure ea irure quis enim consequat. Quis qui amet labore in reprehenderit. Occaecat ad velit voluptate aliquip sunt ex mollit. Esse id exercitation nostrud commodo incididunt nulla elit eu pariatur in. Adipisicing qui irure officia do esse. Proident occaecat sint commodo officia id id do laborum adipisicing duis sit. ',
    salary: 75000,
    tags: ['software', 'remote', 'python', 'google', 'web'],
    location: 'remote'
  },
  {
    imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg',
    position: 'Senior Full Stack Developer',
    company: 'Google',
    description: 'Ex eiusmod veniam nisi ut commodo sint aliquip mollit aliqua. Tempor nisi cupidatat reprehenderit enim quis irure ea irure quis enim consequat. Quis qui amet labore in reprehenderit. Occaecat ad velit voluptate aliquip sunt ex mollit. Esse id exercitation nostrud commodo incididunt nulla elit eu pariatur in. Adipisicing qui irure officia do esse. Proident occaecat sint commodo officia id id do laborum adipisicing duis sit. ',
    salary: 75000,
    tags: ['software', 'remote', 'python', 'google', 'web'],
    location: 'remote'
  },
  {
    imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg?img=1',
    position: 'Senior Full Stack Developer',
    company: 'Google',
    description: 'Ex eiusmod veniam nisi ut commodo sint aliquip mollit aliqua. Tempor nisi cupidatat reprehenderit enim quis irure ea irure quis enim consequat. Quis qui amet labore in reprehenderit. Occaecat ad velit voluptate aliquip sunt ex mollit. Esse id exercitation nostrud commodo incididunt nulla elit eu pariatur in. Adipisicing qui irure officia do esse. Proident occaecat sint commodo officia id id do laborum adipisicing duis sit. ',
    salary: 75000,
    tags: ['software', 'remote', 'python', 'google', 'web'],
    location: 'remote'
  },
  {
    imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg',
    position: 'Senior Full Stack Developer',
    company: 'Google',
    description: 'Ex eiusmod veniam nisi ut commodo sint aliquip mollit aliqua. Tempor nisi cupidatat reprehenderit enim quis irure ea irure quis enim consequat. Quis qui amet labore in reprehenderit. Occaecat ad velit voluptate aliquip sunt ex mollit. Esse id exercitation nostrud commodo incididunt nulla elit eu pariatur in. Adipisicing qui irure officia do esse. Proident occaecat sint commodo officia id id do laborum adipisicing duis sit. ',
    salary: 75000,
    tags: ['software', 'remote', 'python', 'google', 'web'],
    location: 'remote'
  },
  {
    imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg',
    position: 'Senior Full Stack Developer',
    company: 'Google',
    description: 'Ex eiusmod veniam nisi ut commodo sint aliquip mollit aliqua. Tempor nisi cupidatat reprehenderit enim quis irure ea irure quis enim consequat. Quis qui amet labore in reprehenderit. Occaecat ad velit voluptate aliquip sunt ex mollit. Esse id exercitation nostrud commodo incididunt nulla elit eu pariatur in. Adipisicing qui irure officia do esse. Proident occaecat sint commodo officia id id do laborum adipisicing duis sit. ',
    salary: 75000,
    tags: ['software', 'remote', 'python', 'google', 'web'],
    location: 'remote'
  },
  {
    imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg',
    position: 'Senior Full Stack Developer',
    company: 'Google',
    description: 'Ex eiusmod veniam nisi ut commodo sint aliquip mollit aliqua. Tempor nisi cupidatat reprehenderit enim quis irure ea irure quis enim consequat. Quis qui amet labore in reprehenderit. Occaecat ad velit voluptate aliquip sunt ex mollit. Esse id exercitation nostrud commodo incididunt nulla elit eu pariatur in. Adipisicing qui irure officia do esse. Proident occaecat sint commodo officia id id do laborum adipisicing duis sit. ',
    salary: 75000,
    tags: ['software', 'remote', 'python', 'google', 'web'],
    location: 'remote'
  },
  {
    imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg?img=1',
    position: 'Senior Full Stack Developer',
    company: 'Google',
    description: 'Ex eiusmod veniam nisi ut commodo sint aliquip mollit aliqua. Tempor nisi cupidatat reprehenderit enim quis irure ea irure quis enim consequat. Quis qui amet labore in reprehenderit. Occaecat ad velit voluptate aliquip sunt ex mollit. Esse id exercitation nostrud commodo incididunt nulla elit eu pariatur in. Adipisicing qui irure officia do esse. Proident occaecat sint commodo officia id id do laborum adipisicing duis sit. ',
    salary: 75000,
    tags: ['software', 'remote', 'python', 'google', 'web'],
    location: 'remote'
  },
  {
    imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg',
    position: 'Senior Full Stack Developer',
    company: 'Google',
    description: 'Ex eiusmod veniam nisi ut commodo sint aliquip mollit aliqua. Tempor nisi cupidatat reprehenderit enim quis irure ea irure quis enim consequat. Quis qui amet labore in reprehenderit. Occaecat ad velit voluptate aliquip sunt ex mollit. Esse id exercitation nostrud commodo incididunt nulla elit eu pariatur in. Adipisicing qui irure officia do esse. Proident occaecat sint commodo officia id id do laborum adipisicing duis sit. ',
    salary: 75000,
    tags: ['software', 'remote', 'python', 'google', 'web'],
    location: 'remote'
  },
  {
    imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg',
    position: 'Senior Full Stack Developer',
    company: 'Google',
    description: 'Ex eiusmod veniam nisi ut commodo sint aliquip mollit aliqua. Tempor nisi cupidatat reprehenderit enim quis irure ea irure quis enim consequat. Quis qui amet labore in reprehenderit. Occaecat ad velit voluptate aliquip sunt ex mollit. Esse id exercitation nostrud commodo incididunt nulla elit eu pariatur in. Adipisicing qui irure officia do esse. Proident occaecat sint commodo officia id id do laborum adipisicing duis sit. ',
    salary: 75000,
    tags: ['software', 'remote', 'python', 'google', 'web'],
    location: 'remote'
  },
  {
    imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg',
    position: 'Senior Full Stack Developer',
    company: 'Google',
    description: 'Ex eiusmod veniam nisi ut commodo sint aliquip mollit aliqua. Tempor nisi cupidatat reprehenderit enim quis irure ea irure quis enim consequat. Quis qui amet labore in reprehenderit. Occaecat ad velit voluptate aliquip sunt ex mollit. Esse id exercitation nostrud commodo incididunt nulla elit eu pariatur in. Adipisicing qui irure officia do esse. Proident occaecat sint commodo officia id id do laborum adipisicing duis sit. ',
    salary: 75000,
    tags: ['software', 'remote', 'python', 'google', 'web'],
    location: 'remote'
  },
  {
    imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg?img=1',
    position: 'Senior Full Stack Developer',
    company: 'Google',
    description: 'Ex eiusmod veniam nisi ut commodo sint aliquip mollit aliqua. Tempor nisi cupidatat reprehenderit enim quis irure ea irure quis enim consequat. Quis qui amet labore in reprehenderit. Occaecat ad velit voluptate aliquip sunt ex mollit. Esse id exercitation nostrud commodo incididunt nulla elit eu pariatur in. Adipisicing qui irure officia do esse. Proident occaecat sint commodo officia id id do laborum adipisicing duis sit. ',
    salary: 75000,
    tags: ['software', 'remote', 'python', 'google', 'web'],
    location: 'remote'
  },
  {
    imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg',
    position: 'Senior Full Stack Developer',
    company: 'Google',
    description: 'Ex eiusmod veniam nisi ut commodo sint aliquip mollit aliqua. Tempor nisi cupidatat reprehenderit enim quis irure ea irure quis enim consequat. Quis qui amet labore in reprehenderit. Occaecat ad velit voluptate aliquip sunt ex mollit. Esse id exercitation nostrud commodo incididunt nulla elit eu pariatur in. Adipisicing qui irure officia do esse. Proident occaecat sint commodo officia id id do laborum adipisicing duis sit. ',
    salary: 75000,
    tags: ['software', 'remote', 'python', 'google', 'web'],
    location: 'remote'
  },
  {
    imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg',
    position: 'Senior Full Stack Developer',
    company: 'Google',
    description: 'Ex eiusmod veniam nisi ut commodo sint aliquip mollit aliqua. Tempor nisi cupidatat reprehenderit enim quis irure ea irure quis enim consequat. Quis qui amet labore in reprehenderit. Occaecat ad velit voluptate aliquip sunt ex mollit. Esse id exercitation nostrud commodo incididunt nulla elit eu pariatur in. Adipisicing qui irure officia do esse. Proident occaecat sint commodo officia id id do laborum adipisicing duis sit. ',
    salary: 75000,
    tags: ['software', 'remote', 'python', 'google', 'web'],
    location: 'remote'
  },
];


function JobList() {
  const styles = useStyles();

  return(
        <Container maxWidth="lg" component="main">
        <JobSearchBar />
        <Grid container spacing={5} direction="column">
          {
          jobs.map((job, index) => (<Job key={index} job={job} />))
          }
        </Grid>
      </Container>
    );
}

export default JobList;