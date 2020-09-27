import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import NavigationBar from '../NavigationBar/navigationbar.component';

function Header(props) {
  const classes = props.classes;
  return(
      <>
      <NavigationBar classes={classes}/>
        <Container maxWidth="auto" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Remote Jobs
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          A job board designed <b>by</b> remote workers <b>for</b> remote workers.
        </Typography>
      </Container>
    </>
    );
}

export default Header;